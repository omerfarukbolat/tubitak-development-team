import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface CardDataProps {
  id: number;
  name: string;
}

interface DataProps {
  id: number | undefined;
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
    setUpdateTrelloCard: (state, action: PayloadAction<DataProps[]>) => {},
  },
});

export const { setTrelloFetch, setAddTrelloTitle, setAddTrelloCard } =
  trelloSlice.actions;

export default trelloSlice.reducer;
