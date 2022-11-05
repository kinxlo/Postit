import axios, { AxiosInstance, AxiosRequestConfig } from "axios";

export abstract class AxiosBaseService {
  protected instance: AxiosInstance;
  protected token?: string;
  protected readonly baseURL?: string;

  public constructor(baseURL?: string, token?: string) {
    this.baseURL = baseURL;
    this.instance = axios.create({
      baseURL,
    });
    this.token = token;

    this.initializeRequestInterceptor();
    // this.initializeResponseInterceptor();
  }

  private initializeRequestInterceptor = () => {
    this.instance.interceptors.request.use(this.handleRequest);
  };

  private handleRequest = (config: AxiosRequestConfig) => {
    // config.headers!["Authorization"] = `Bearer ${this.token}`;
    config.headers!["X-RapidAPI-Key"] =
      "c3555625admshdb2a267d55a30f0p1a1698jsn6c2c2fb2feda";
    config.headers!["X-RapidAPI-Host"] = "bb-finance.p.rapidapi.com";

    return config;
  };
}
