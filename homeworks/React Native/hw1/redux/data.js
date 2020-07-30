import { SET_APP_DATA } from "./AsyncStorage";

const CREATE_LIST = "CREATE_LIST";
const RESET_ITEMS = "RESET_ITEMS";
const CHANGE_STATUS = "CHANGE_STATUS";
const DELETE_LIST = "DELETE_LIST";
const DELETE_ITEM = "DELETE_ITEM";
const EDIT_ITEM = "EDIT_ITEM";
const ADD_ITEM = "ADD_ITEM";
const UPDATE_ITEM = "UPDATE_ITEM";

export const MODULE_NAME = "data";
export const getShopList = (state) => state[MODULE_NAME].shopLists;

const initialListState = {
  shopLists: [
    {
      id: createID(),
      name: "First Regular List",
      type: "regular",
      products: [
        {
          id: createID(),
          name: "prod 1",
          count: 1,
          bought: false,
          unit: "kg",
        },
      ],
    },
    {
      id: createID(),
      name: "First One Time List",
      type: "onetime",
      products: [
        {
          id: createID(),
          name: "prod1",
          count: 1,
          bought: false,
          unit: "kg",
        },
        {
          id: createID(),
          name: "prod2",
          count: 5,
          bought: true,
          unit: "kg",
        },
        {
          id: createID(),
          name: "prod3",
          count: 2,
          bought: false,
          unit: "litre",
        },
      ],
    },
  ],
};

export function reducer(state = initialListState, { type, payload }) {
  switch (type) {
    case SET_APP_DATA:
      return {
        ...state,
        ...payload.data,
      };
    case CREATE_LIST:
      return {
        ...state,
        shopLists: [
          ...state.shopLists,
          {
            id: payload.id,
            name: payload.name,
            type: payload.type,
            products: [],
          },
        ],
      };
    case DELETE_LIST:
      return {
        ...state,
        shopLists: state.shopLists.filter(
          (shopList) => shopList.id !== payload.id
        ),
      };
    case RESET_ITEMS:
      return {
        ...state,
        shopLists: state.shopLists.map((shopList) => {
          if (shopList.id === payload.id) {
            return {
              ...shopList,
              products: shopList.products.map((item) => {
                return {
                  ...item,
                  bought: false,
                };
              }),
            };
          }
          return shopList;
        }),
      };
    case CHANGE_STATUS:
      return {
        ...state,
        shopLists: state.shopLists.map((shopList) => {
          if (shopList.id === payload.id) {
            return {
              ...shopList,
              products: shopList.products.map((item) => {
                if (item.id === payload.itemID) {
                  return {
                    ...item,
                    bought: !item.bought,
                  };
                }
                return item;
              }),
            };
          }
          return shopList;
        }),
      };
    case ADD_ITEM:
      return {
        ...state,
        shopLists: state.shopLists.map((shopList) => {
          if (shopList.id === payload.id) {
            return {
              ...shopList,
              products: [
                {
                  id: createID(),
                  name: payload?.name,
                  count: payload?.count,
                  unit: payload?.unit,
                  bought: false,
                },
                ...shopList.products,
              ],
            };
          }
          return shopList;
        }),
      };
    case DELETE_ITEM:
      return {
        ...state,
        shopLists: state.shopLists.map((shopList) => {
          if (shopList.id === payload.id) {
            return {
              ...shopList,
              products: shopList.products.filter(
                (item) => item.id !== payload.itemID
              ),
            };
          }
          return shopList;
        }),
      };
    case EDIT_ITEM:
      return {
        ...state,
        shopLists: state.shopLists.map((shopList) => {
          if (shopList.id === payload.id) {
            return {
              ...shopList,
              products: shopList.products.map((item) => {
                if (item.id === payload.item.id) {
                  return {
                    ...item,
                    ...payload.item,
                  };
                }
                return item;
              }),
            };
          }
          return shopList;
        }),
      };
    case UPDATE_ITEM:
      return {
        ...state,
        shopLists: state.shopLists.map((shopList) => {
          if (shopList.id === payload.id) {
            return {
              ...shopList,
              products: shopList.products.map((item) => {
                if (item.id === payload.item.id) {
                  return {
                    ...item,
                    ...payload.item,
                  };
                }
                return item;
              }),
            };
          }
          return shopList;
        }),
      };
    default:
      return state;
  }
}

export const createList = (payload) => ({
  type: CREATE_LIST,
  payload,
});
export const changeStatus = (payload) => ({
  type: CHANGE_STATUS,
  payload,
});
export const resetItems = (payload) => ({
  type: RESET_ITEMS,
  payload,
});
export const deleteList = (payload) => ({
  type: DELETE_LIST,
  payload,
});
export const deleteItem = (payload) => ({
  type: DELETE_ITEM,
  payload,
});
export const editItem = (payload) => ({
  type: EDIT_ITEM,
  payload,
});
export const addItem = (payload) => ({
  type: ADD_ITEM,
  payload,
});
export const updateItem = (payload) => ({
  type: UPDATE_ITEM,
  payload,
});
export function createID() {
  return `${Date.now()}${Math.random()}`;
}
