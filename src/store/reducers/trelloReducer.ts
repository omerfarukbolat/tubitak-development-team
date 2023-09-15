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

      const cardToUpdate = state.data
        .flatMap((statusData) => statusData.data)
        .find((card) => card.name === cardName);

      if (cardToUpdate) {
        const newCard = { ...cardToUpdate, name: newCardName };

        const oldStatus = state.data.find((statusData) =>
          statusData.data.some((card) => card.name === cardName)
        );

        if (oldStatus) {
          oldStatus.data = oldStatus.data.filter(
            (card) => card.name !== cardName
          );
        }

        const targetStatus = state.data.find(
          (statusData) => statusData.title === newStatus
        );

        if (targetStatus) {
          targetStatus.data.push(newCard);
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
      action: PayloadAction<number | undefined>
    ) => {
      state.data = state.data.filter((item) => item.id !== action.payload);
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
