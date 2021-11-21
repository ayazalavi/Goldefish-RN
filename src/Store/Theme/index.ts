import { createSlice } from '@reduxjs/toolkit'

const slice = createSlice({
  name: 'theme',
  initialState: {
    theme: null,
    darkMode: null,
    safeareaColor: null,
  } as ThemeState,
  reducers: {
    changeTheme: (state, { payload: { theme, darkMode } }: ThemePayload) => {
      if (typeof theme !== 'undefined') {
        state.theme = theme
      }
      if (typeof darkMode !== 'undefined') {
        state.darkMode = darkMode
      }
    },
    setDefaultTheme: (
      state,
      { payload: { theme, darkMode } }: ThemePayload,
    ) => {
      if (!state.theme) {
        state.theme = theme
        state.darkMode = darkMode
      }
    },
    setSafeAreaBackgroundColor: (
      state,
      { payload: { safeareaColor } }: ThemePayload,
    ) => {
      if (
        typeof safeareaColor?.top !== 'undefined' ||
        typeof safeareaColor?.bottom !== 'undefined'
      ) {
        state.safeareaColor = safeareaColor
      }
    },
  },
})

export const { changeTheme, setDefaultTheme, setSafeAreaBackgroundColor } =
  slice.actions

export default slice.reducer

export type ThemeState = {
  theme: 'default' | null | undefined
  darkMode: boolean | null | undefined
  safeareaColor: { top: string; bottom: string } | null | undefined
}

type ThemePayload = {
  payload: {
    theme: 'default' | null | undefined
    darkMode: boolean | null | undefined
    safeareaColor: { top: string; bottom: string } | null | undefined
  }
}
