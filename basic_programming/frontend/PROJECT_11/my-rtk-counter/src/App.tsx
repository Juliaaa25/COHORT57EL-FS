import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProductsList from "./features/products/ProductsList";
import { UsersList } from "./features/users/UsersList";
import { Counter } from "./features/counter/Counter";
import { Sandwich } from "./features/sandwich/Sandwich";
import Layout from "./features/LayOut/LayOut";
import Login from "./features/auth/Login";
import Profile from "./features/auth/Profile";
import ProtectedRoute from "./features/auth/ProtectedRoute";
import NasaPhotos from "./features/nasa/NasaPhotos";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          {/* Главная */}
          <Route
            index
            element={
              <div
                style={{
                  height: "65vh",
                  width: "90vw",

                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",

                  textAlign: "center",
                  gap: "20px",

                  backgroundImage:
                    "url('https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=1600&q=80')",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",

                  color: "white",
                  padding: "70px",
                }}
              >
                <h1
                  style={{
                    fontSize: "48px",
                    textShadow: "0 2px 6px rgba(0,0,0,0.4)",
                  }}
                >
                  Добро пожаловать в наш магазин!
                </h1>

                <p
                  style={{
                    fontSize: "22px",
                    maxWidth: "600px",
                    textShadow: "0 2px 6px rgba(0,0,0,0.4)",
                  }}
                >
                  У нас самые лучшие товары и удобные приложения!
                </p>
              </div>
            }
          />

          <Route path="products" element={<ProductsList />} />
          <Route path="users" element={<UsersList />} />
          <Route path="counter" element={<Counter />} />
          <Route path="sandwich" element={<Sandwich />} />
          <Route path="/nasa" element={<NasaPhotos />} />

          <Route path="login" element={<Login />} />
          <Route
            path="profile"
            element={
              <ProtectedRoute>
                <Profile />
              </ProtectedRoute>
            }
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
