/**
 * @apiDefine 200OK
 * @apiSuccess (200) {string} r_message success
 */

/**
 * @apiDefine 201Created
 * @apiSuccess (201) {string} r_message success
 *
 */

/**
 * @apiDefine 400BadRequest
 * @apiSuccess (400) {string} r_message Bad Request
 */

/**
 * @apiDefine AuthHeader
 * @apiHeader userid Your userid
 * @apiHeader userpass Your userpass
 */

/**
 * @api {get} /users/me Get own informations
 * @apiGroup Users
 * @apiUse AuthHeader
 * @apiSuccess (200) {User} data Data
 * @apiUse 400BadRequest
 */

/**
 * @api {get} /users/:userid/avatar Get own avatar
 * @apiGroup Users
 * @apiParam {string} userid
 * @apiUse 400BadRequest
 */

/**
 * @api {get} /stocks/all/:market Get all stocks of a market
 * @apiGroup Stocks
 * @apiUse AuthHeader
 * @apiParam {string="DAX","MDAX","SDAX","TEC","PRIME","EUROPASELECT","ESTOXX","DJI","NASDAQ","USA_SELECT","INTERNATIONAL","BONDS","ETFS","TOPFLOP"} market
 * @apiSuccess (200) {string} data.title Market
 * @apiSuccess (200) {Stock} data.stocks Stocks
 * @apiUse 400BadRequest
 */

/**
 * @api {get} /stocks/:isin Get details of a stock
 * @apiGroup Stocks
 * @apiUse AuthHeader
 * @apiParam {string} isin
 * @apiSuccess (200) {Stock} data
 * @apiUse 400BadRequest
 */

/**
 * @api {get} /stocks/:isin/chart/:time Get historical details of a stock
 * @apiGroup Stocks
 * @apiUse AuthHeader
 * @apiParam {string} isin
 * @apiParam {string="1D","1W","1M","1Y","5Y"} time
 * @apiSuccess (200) {Series} data.series
 * @apiUse 400BadRequest
 */

/**
 * @api {get} /stocks/search/:query Search a stock
 * @apiGroup Stocks
 * @apiUse AuthHeader
 * @apiParam {string} query
 * @apiSuccess (200) {Stock} data.stocks
 * @apiUse 400BadRequest
 */

/**
 * @api {post} /users/me/watch/:isin Add stock to watchlist
 * @apiGroup Users
 * @apiUse AuthHeader
 * @apiParam {string} isin
 * @apiUse 201Created
 * @apiUse 400BadRequest
 */

/**
 * @api {get} /users/:userid/chart/:time Get charts of a user
 * @apiGroup Users
 * @apiUse AuthHeader
 * @apiParam {string} userid
 * @apiParam {string="1D","1W","1M","1Y","5Y"} time
 * @apiSuccess (200) {Series} data.series
 * @apiUse 400BadRequest
 */

/**
 * @api {post} /orders Create new order
 * @apiGroup Orders
 * @apiUse AuthHeader
 * @apiParam {string="BUY","SELL"} action
 * @apiParam {boolean} allow_partly
 * @apiParam {number} count
 * @apiParam {string} isin
 * @apiParam {number} lower_limit
 * @apiParam {number} upper_limit
 * @apiUse 201Created
 * @apiUse 400BadRequest
 */

/**
 * @api {delete} /orders/:orderid Delete a order
 * @apiGroup Orders
 * @apiUse AuthHeader
 * @apiParam {string} orderid
 * @apiUse 200OK
 * @apiUse 400BadRequest
 */

/**
 * @api {get} /top/:time Get leaderboards
 * @apiGroup Top
 * @apiUse AuthHeader
 * @apiParam {string="1D","1W","1M","1Y","5Y"} time
 * @apiSuccess (200) {Top} data
 * @apiUse 400BadRequest
 */

/**
 * @api {post} /users/me/friends/add/:userid Add a user as a friend
 * @apiGroup Users
 * @apiUse AuthHeader
 * @apiParam {string} userid
 * @apiUse 201Created
 * @apiUse 400BadRequest
 */

/**
 * @api {get} /users/me/friends Get all friends
 * @apiGroup Users
 * @apiUse AuthHeader
 * @apiSuccess (200) {User} data
 * @apiUse 400BadRequest
 */

 /**
  * @api {get} /users/search/:query Search a user
  * @apiGroup Users
  * @apiUse AuthHeader
  * @apiParam {string} query
  * @apiSuccess (200) {User} data
  * @apiUse 400BadRequest
  */