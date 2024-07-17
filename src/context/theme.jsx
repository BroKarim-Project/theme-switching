import { createContext, useContext, useState, useEffect } from 'react';

export const ThemeContext = createContext({
  themeMode: 'light',
  setThemeMode: () => {},
});

export const ThemeProvider = ({ children }) => {
  const [themeMode, setThemeMode] = useState('light');

  useEffect(() => {
    document.querySelector('html').classList.remove('light', 'dark', 'blue', 'green', 'brown', 'pink');
    document.querySelector('html').classList.add(themeMode);
  }, [themeMode]);

  const value = {
    themeMode,
    setThemeMode,
  };

  return (
    <ThemeContext.Provider value={value} className="bg-bgColor">
      {children}
    </ThemeContext.Provider>
  );
};

export default function Theme() {
  return useContext(ThemeContext);
}



/* ** PENJELASAN **

* Context di React adalah sebuah cara untuk memungkinkan data yang harus dapat diakses oleh banyak komponen tanpa harus mengirimkan props secara manual melalui setiap tingkat pohon komponen

* Dalam kasus ini, kita ingin tema dapat diakses oleh semua component, tanpa harus kita props satu-satu componen

* Sehingga setiap componet yang ada di dalam contexk, dapat mereasa tema kkita

* Kita juga memilki themeProvide(), yang mengelola state (themeMode), sehingga theme dapa kita ganti2 dengan (setThemeMode)

* Untuk mengakses ThemeContext kita membuat hook menggunakna react hook (useContext)


* di themeProvide kita jumpai useEffect untuk manage theme switching berdasarkan variable themeMode, kita membuat fungsi untuk menghapus class yg ditulis dari HTML. ini untuk memastika hanya satu theme yang dipakai di satu waktu 

* Theme() kita buat untuk memanage nilai themMode, tanpa harus props sana sini.


*/