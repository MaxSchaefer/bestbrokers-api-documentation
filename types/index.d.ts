interface User {
    ID: string,
    userName: string,
    money: number,
    money_available: number,
    money_yesterday: number,
    money_week: number,
    money_month: number,
    money_year: number,
    money_initial: number,
    created_at: Date,
    last_request: Date,
    rate_dialog_seen: null,
    ad_start: Date,
    me?: Me
}

interface Me {
    firstOrderMessageSent: string,
    deleted: string,
    language: string,
    change_day: string,
    change_week: string,
    change_month: string,
    change_year: string,
    change_initial: string,
    current_stocks: Array<CurrentStocks> | null,
    watchlist: Array<Watchlist> | null
    order: Array<Orders> | null,
    is_open: boolean,
    next_open_date: Date | null,
    next_close_date: Date | null,
    ad_types: String[]
}

interface CurrentStocks {
    count: number,
    buy_time: Date,
    buy_ask: number,
    stock: Stock
}

interface Stock {
    ISIN: string,
    WKN: string,
    name: string,
    time: Date,
    bid: number,
    ask: number,
    bid_past_day: number,
    ask_past_day: number,
    high_day: number,
    low_day: number,
    high_week: number,
    low_week: number,
    high_month: number,
    low_month: number,
    high_year: number,
    low_year: number
}

interface Watchlist {
    start_bid: number,
    start_ask: number,
    watch_time: Date,
    stock: Stock
}

interface Orders {
    ID: string,
    isin: string,
    action: OrderAction,
    count: number,
    lower_limit: number,
    upper_limit: 0,
    allow_partly: boolean,
    stock: Stock
}

enum OrderAction {
    BUY,
    SELL
}

interface Series {
    title: string,
    source?: string
    range: string,
    values: Array<SeriesValue>
}

interface SeriesValue {
    time: Date,
    value?: number,
    bid?: number,
    ask?: number
}

interface Top {
    users: Leaderboard,
    friends: Leaderboard
}

interface Leaderboard {
    place: number,
    count: string,
    list: User
}