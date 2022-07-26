const router = require("express").Router();

const userRoutes = require("./user-routes");
const vacayRoutes = require("./vacay-routes");
const agendaRoutes = require("./agenda-item-routes");
const packingItemRoutes = require("./packing-item-routes");
const calendarRoutes = require("./calendar-route");
//add contact route, this links the packing-item-routes file to the main system as an api

router.use("/users", userRoutes);
router.use("/vacays", vacayRoutes);
router.use("/agendas", agendaRoutes);
router.use("/packingItems", packingItemRoutes);
router.use("/calendars", calendarRoutes);
//link contact route to define path name

module.exports = router;
