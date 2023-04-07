import ListNews from "./components/ListNews";
import ListStock from "./components/ListStock";
import { STOCK_ROUTE } from "./utils/consts";
import { NEWS_ROUTE } from "./utils/consts";


export const StockRoutes = [
    {
        path: STOCK_ROUTE,
        Component: ListStock
    }
]

export const NewsRoutes = [
    {
        path: NEWS_ROUTE,
        Component: ListNews
    }
]