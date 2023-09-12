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
      state.data = [
        ...state.data,
        { id: new Date().getTime(), title: action.payload, data: [] },
      ];
    },
    setUpdateTrelloCard: (state, action: PayloadAction<DataProps[]>) => {},
  },
});

export const { setTrelloFetch, setAddTrelloTitle } = trelloSlice.actions;

export default trelloSlice.reducer;
