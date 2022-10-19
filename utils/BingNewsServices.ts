import { AxiosBaseService } from "./AxiosBaseService";

export class BingNewsService extends AxiosBaseService {
  private static classInstance?: BingNewsService;

  constructor() {
    super("https://bing-news-search1.p.rapidapi.com");
  }

  public static getInstance() {
    if (!this.classInstance) {
      this.classInstance = new BingNewsService();
    }

    return this.classInstance;
  }

  public bingNewsData = async (url: string) => {
    const response = await this.instance.get(url, {
      params: {
        cc: "us",
        safeSearch: "Off",
        textFormat: "Raw",
      },
    });
    if (response) {
      return response.data.value;
    }
  };

  public getBingTrendingNews = async (url: string) => {
    const response = await this.instance.get(url, {
      params: {
        cc: "us",
        safeSearch: "Off",
        textFormat: "Raw",
      },
    });
    if (response) {
      return response.data.value;
    }
  };
}
