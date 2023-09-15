import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface CardDataProps {
  id: number;
  name: string;
}

interface DataProps {
  id: number;
  title: string;
  data: CardDataProps[];
}

interface TrelloState {
  data: DataProps[];
  didFetched: boolean;
}

const initialState: TrelloState = {
  data: [],
  didFetched: false,
};

const trelloSlice = createSlice({
  name: 'trello',
  initialState,
  reducers: {
    setTrelloFetch: (state, action: PayloadAction<DataProps[]>) => {
      state.data = action.payload;
      state.didFetched = true;
    },
    setAddTrelloTitle: (state, action: PayloadAction<string>) => {
      const newTitle = {
        id: new Date().getTime(),
        title: action.payload,
        data: [],
      };

      state.data = [...state.data, newTitle];
    },
    setAddTrelloCard: (
      state,
      action: PayloadAction<{
        cardName: string;
        titleId: number;
        titleName: string;
      }>
    ) => {
      const { cardName, titleId, titleName } = action.payload;

      const existingCardIndex = state.data.findIndex(
        (item) => item.id === titleId
      );

      if (existingCardIndex !== -1) {
        const existingCard = state.data[existingCardIndex];
        const cardNameExists = existingCard.data.some(
          (card) => card.name === cardName
        );

        if (!cardNameExists) {
          const newCard = {
            id: new Date().getTime(),
            name: cardName,
          };
          existingCard.data.push(newCard);
        }
      } else {
        state.data = [
          ...state.data,
          {
            id: titleId,
            title: titleName,
            data: [{ id: new Date().getTime(), name: cardName }],
          },
        ];
      }
    },
    setUpdateTrelloCard: (
      state,
      action: PayloadAction<{
        cardName: string;
        newCardName: string;
        newStatus: string;
      }>
    ) => {
      const { cardName, newCardName, newStatus } = action.payload;

      let oldStatus: string | null = null;
      let updatedCardIndex: number | null = null;

      state.data.forEach((statusData) => {
        const cardIndex = statusData.data.findIndex(
          (card) => card.name === cardName
        );
        if (cardIndex !== -1) {
          oldStatus = statusData.title;
          updatedCardIndex = cardIndex;
        }
      });

      if (oldStatus !== null && updatedCardIndex !== null) {
        state.data.forEach((statusData) => {
          if (statusData.title === oldStatus) {
            state.data.forEach((statusData) => {
              statusData.data.splice(updatedCardIndex as number, 1);
            });
          }
        });

        const newCard = {
          id: new Date().getTime(),
          name: newCardName,
        };

        const targetStatusIndex = state.data.findIndex(
          (item) => item.title === newStatus
        );
        if (targetStatusIndex !== -1) {
          state.data[targetStatusIndex].data.push(newCard);
        } else {
          const newStatusData = {
            id: new Date().getTime(),
            title: newStatus,
            data: [newCard],
          };
          state.data.push(newStatusData);
        }
      }
    },

    setRemoveTrelloTitle: (
      state,
      action: PayloadAction<string | undefined>
    ) => {
      state.data = state.data.filter((item) => item.title !== action.payload);
    },
    setRemoveTrelloCard: (
      state,
      action: PayloadAction<{ cardId: number; title: string }>
    ) => {
      const filteredData = state.data.find(
        (item) => item.title === action.payload.title
      );

      const filteredDataItemRemove = filteredData?.data.filter(
        (item) => item.id !== action.payload.cardId
      );

      if (filteredData && filteredDataItemRemove) {
        state.data = [
          ...state.data.filter((item) => item.title !== action.payload.title),
          { ...filteredData, data: filteredDataItemRemove },
        ].sort((a, b) => a.id - b.id);
      }
    },
  },
});

export const {
  setTrelloFetch,
  setAddTrelloTitle,
  setAddTrelloCard,
  setUpdateTrelloCard,
  setRemoveTrelloTitle,
  setRemoveTrelloCard,
} = trelloSlice.actions;

export default trelloSlice.reducer;
