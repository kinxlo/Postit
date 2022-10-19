import { AxiosBaseService } from "./AxiosBaseService";

export class NewsService extends AxiosBaseService {
  private static classInstance?: NewsService;

  constructor() {
    super("https://bb-finance.p.rapidapi.com");
  }

  public static getInstance() {
    if (!this.classInstance) {
      this.classInstance = new NewsService();
    }

    return this.classInstance;
  }

  public getNewsData = async (url: string, params?: object) => {
    const response = await this.instance.get(url, { params });
    if (response) {
      return response.data;
    }
  };
}
