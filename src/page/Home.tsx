/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useReducer, useState } from "react";
import Header from "../components/Header";
import Section from "../components/Section";

interface Product {
  title: string | undefined;
  id: number;
  name: string;
  price: number;
  description: string;
  stock: string;
  image?: string;
  show?: boolean;
}

// const API_URL="https://localhost:3002/api/products";
const API_URL = "http://localhost:3001/products";
//Action types
const FETCH_START = "FETCH_START";
const FETCH_SUCCESS = "FETCH_SUCCESS";
const FETCH_ERROR = "FETCH_ERROR";
const ADD_PRODUCT = "ADD_PRODUCT";
const UPDATE_PRODUCT = "UPDATE_PRODUCT";
const DELETE_PRODUCT = "DELETE_PRODUCT";

//Initial State
const initialState = {
  // products:[],
  products: [] as Product[],
  loading: false,
  // error:null
  error: null as string | null,
};

//Reducer function (business logic)
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const reducer = (state: any, action: any) => {
  switch (action.type) {
    case FETCH_START:
      return { ...state, loading: true }; //call api(LoadingState)
    case FETCH_SUCCESS:
      return { ...state, loading: false, products: action.payload };
    case FETCH_ERROR:
      return { ...state, loading: false, error: action.payload };
    case ADD_PRODUCT:
      return { ...state, products: [...state.products, action.payload] };
    case UPDATE_PRODUCT:
      return {
        ...state,
        products: state.products.map((product: Product) =>
          product.id === action.payload.id ? action.payload : product,
        ),
      };
    case DELETE_PRODUCT:
      return {
        ...state,
        products: state.products.filter(
          (product: Product) => product.id !== action.payload,
        ),
      };
    default:
      return state;
  }
};

//Fetch products from API
const fetchProducts = async (dispatch: any) => {
  //wait for 3 seconds to call api (use promise)
  new Promise((resolve) => setTimeout(resolve, 1000));
  dispatch({ type: FETCH_START }); //initail state
  try {
    const response = await fetch(API_URL);
    const data = await response.json();
    // const products=data.slice(0,6).map((item:any)=>({}))
    const products = data.map((item: any) => ({
      id: item.id,
      title: item.title,
      price: item.price,
      description: item.description,
      image: `https://picsum.photos/150/${Math.floor(Math.random() * 100)}`,
    }));
    dispatch({ type: FETCH_SUCCESS, payload: products }); //success state
  } catch (error) {
    dispatch({
      type: FETCH_ERROR,
      payload: (error as Error).message || "Failed to fetch products",
    }); //failure state
  }
};



//add product
const addProduct = async (dispatch: any, product: Omit<Product, "id">) => {
  try {
    const response = await fetch(API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(product),
    });
    const data = await response.json();
    dispatch({ type: ADD_PRODUCT, payload: { ...product, id: data.id } });
  } catch (error) {
    dispatch({
      type: FETCH_ERROR,
      payload: (error as Error).message || "Failed to add product",
    });
  }
};

//update product
const updateProduct = async (dispatch: any, product: Product) => {
  try {
    await fetch(`${API_URL}/${product.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(product),
    });
    dispatch({ type: UPDATE_PRODUCT, payload: product });
  } catch (error) {
    dispatch({
      type: FETCH_ERROR,
      payload: (error as Error).message || "Failed to update product",
    });
  }
};

//delete product
const deleteProduct = async (dispatch: any, id: number) => {
  try {
    await fetch(`${API_URL}/${id}`, {
      method: "DELETE",
    });
    dispatch({ type: DELETE_PRODUCT, payload: id });
  } catch (error) {
    dispatch({
      type: FETCH_ERROR,
      payload: (error as Error).message || "Failed to delete product",
    });
  }
};

export default function Home() {
  //const {name,setName}=useColor();
  //const {color,setColor}=useColor();
  const [state, dispatch] = useReducer(reducer, initialState);
  console.log("state:", state);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  useEffect(() => {
    fetchProducts(dispatch);
  }, []);

  //Add Product
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    console.log("formData:", formData);
    const productData = {
      // id: selectedProduct ? selectedProduct.id : Date.now(),
      name: formData.get("title") as string,
      title: formData.get("title") as string,
      description: formData.get("description") as string,
      price: parseFloat(formData.get("price") as string),
      stock: formData.get("stock") as string,
      image: formData.get("image") as string,
    };
    console.log("productData:", productData);

    if (selectedProduct) {
      updateProduct(dispatch, { ...productData, id: selectedProduct.id });
    } else {
      addProduct(dispatch, productData);
    }
    setSelectedProduct(null);
    (e.target as HTMLFormElement).reset();
  };

  return (
    <div>
      <Header />
      <Section />
      <section className="h-screen bg-white flex items-center justify-center flex-col text-center">
        <h2 className="text-3xl font-bold mb-4">Contact React</h2>
        <p className="text-lg">
          If you have any questions, feel free to reach out to us
        </p>
        <button className="bg-blue-500 text-white px-4 py-2 rounded-md">
          Contact Us
        </button>
      </section>

      {/* Products Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-8">
        {state.loading ? (
          <p>Loading...</p>
        ) : state.error ? (
          <p>{state.error}</p>
        ) : (
          state.products.map((product: Product) => (
            <div key={product.id} className="border p-4 rounded-lg shadow">
              <img
                src={product.image ?? "//picsum.photos/200"}
                alt={product.title}
                className="w-full h-auto mb-4"
                style={{
                  minHeight: "200px",
                  maxHeight: "200px",
                  objectFit: "cover",
                }}
              />

              <h2 className="text-xl font-bold">{product.title}</h2>

              <p className="text-gray-600">
                {product.description.slice(0, 100) + "..."}
              </p>

              <p className="text-gray-600">{product.stock}</p>

              <p className="text-lg font-bold mt-2">
                ${product.price.toFixed(2)}
              </p>

              <div className="mt-4 flex gap-2">
                <button
                  onClick={() => setSelectedProduct(product)}
                  className="bg-blue-500 text-white px-4 py-2 rounded"
                >
                  Edit
                </button>
                <button
                  onClick={() => deleteProduct(dispatch, product.id)}
                  className="bg-red-500 text-white px-4 py-2 rounded"
                >
                  Delete
                </button>
              </div>
            </div>
          ))
        )}
      </div>

      {/* Product Form */}
      <div className="mt-8 border rounded-lg w-3/5 mx-auto shadow-lg p-10 ">
        {/* p-4 rounded-lg */}
        <h2 className="text-2xl font-bold mb-4">
          {selectedProduct ? "Edit Product" : "Add New Product"}
        </h2>

        <form onSubmit={handleSubmit}>
          <div className="space-y-4">
            <input
              type="text"
              name="title"
              placeholder="Product title"
              defaultValue={selectedProduct?.title || ""}
              className="w-full p-2 border rounded"
              required
            />

            <textarea
              name="description"
              placeholder="Product Description"
              defaultValue={selectedProduct?.description || ""}
              className="w-full p-2 border rounded"
              required
            />

            <input
              type="number"
              name="price"
              placeholder="Price"
              step="0.01"
              defaultValue={selectedProduct?.price || ""}
              className="w-full p-2 border rounded"
              required
            />

            <input
              type="number"
              name="stock"
              placeholder="stock"
              step="0.01"
              defaultValue={selectedProduct?.stock || ""}
              className="w-full p-2 border rounded"
              required
            />

            <input
              type="text"
              name="image"
              placeholder="Image URL"
              defaultValue={selectedProduct?.image || ""}
              className="w-full p-2 border rounded"
              required
            />

            <div className="flex gap-2">
              <button
                type="submit"
                className="bg-green-500 text-white px-4 py-2 rounded"
              >
                {selectedProduct ? "Update Product" : "Add Product"}
              </button>

              {selectedProduct && (
                <button
                  type="button"
                  onClick={() => setSelectedProduct(null)}
                  className="bg-gray-500 text-white px-4 py-2 rounded"
                >
                  Cancel
                </button>
              )}
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
