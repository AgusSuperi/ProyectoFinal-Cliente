import * as actions from "./Types";

export const setDrawerOpen = (drawerOpen) => ({
  type: actions.SET_DRAWER_OPEN,
  payload: drawerOpen,
});

export const setFilterPanelOpen = (filterPanelOpen) => ({
    type: actions.SET_FILTER_PANEL_OPEN,
    payload: filterPanelOpen,
});

export const closeDrawer = () => ({
  type: actions.CLOSE_DRAWER,
});