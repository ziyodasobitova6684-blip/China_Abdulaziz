import React, { useEffect, useMemo, useState } from "react";

import "./App.css";

import AdminPanel from "./AdminPanel";

const initialProducts = [
  {
    id: 1,

    name: "Premium Cashmere Kurtka",

    price: 180,

    category: "men-clothing",

    description: "Nafis dizayn, yumshoq material va kundalik qulaylik.",

    image: "https://images.unsplash.com/photo-1544923246-77307dd654cb?w=1200",

    sizes: ["S", "M", "L", "XL", "XXL"],

    colors: ["Qora", "Kulrang", "Bej"],
  },

  {
    id: 2,

    name: "Classic Erkaklar Ko‘ylagi",

    price: 75,

    category: "men-clothing",

    description: "Klassik uslub uchun zamonaviy ko‘ylak.",

    image:
      "https://images.unsplash.com/photo-1598033129183-c4f50c736f10?w=1200",

    sizes: ["S", "M", "L", "XL", "XXL"],

    colors: ["Oq", "Qora", "Ko‘k"],
  },

  {
    id: 3,

    name: "Erkaklar Charm Sumkasi",

    price: 120,

    category: "men-bags",

    description: "Kundalik foydalanish uchun qulay va zamonaviy sumka.",

    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=1200",

    sizes: ["Universal"],

    colors: ["Qora", "Jigarrang"],
  },

  {
    id: 4,

    name: "Ayollar Elegant Sumkasi",

    price: 145,

    category: "women-bags",

    description: "Nafis ko‘rinish va kundalik foydalanish uchun.",

    image:
      "https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=1200",

    sizes: ["Universal"],

    colors: ["Qora", "Bej"],
  },

  {
    id: 5,

    name: "Erkaklar Klassik Oyoq Kiyimi",

    price: 110,

    category: "men-shoes",

    description: "Qulay va zamonaviy kundalik oyoq kiyim.",

    image:
      "https://images.unsplash.com/photo-1614252369475-531eba835eb1?w=1200",

    sizes: ["39", "40", "41", "42", "43", "44", "45"],

    colors: ["Qora", "Jigarrang"],
  },

  {
    id: 6,

    name: "Ayollar Elegant Oyoq Kiyimi",

    price: 95,

    category: "women-shoes",

    description: "Nafis obrazlar uchun zamonaviy oyoq kiyim.",

    image: "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=1200",

    sizes: ["36", "37", "38", "39", "40", "41"],

    colors: ["Qora", "Bej"],
  },

  {
    id: 7,

    name: "Bolalar Kundalik Kiyim To‘plami",

    price: 45,

    category: "kids-clothing",

    description: "Bolalar uchun qulay kundalik kiyim.",

    image:
      "https://images.unsplash.com/photo-1519238263530-99bdd11df2ea?w=1200",

    sizes: ["2Y", "4Y", "6Y", "8Y", "10Y", "12Y"],

    colors: ["Ko‘k", "Kulrang"],
  },

  {
    id: 8,

    name: "Minimal Classic Soat",

    price: 160,

    category: "watches",

    description: "Klassik va zamonaviy dizayn uyg‘unligi.",

    image:
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=1200",

    sizes: ["Universal"],

    colors: ["Qora", "Oltin"],
  },

  {
    id: 9,

    name: "Premium Erkaklar Ko‘zoynagi",

    price: 55,

    category: "eyewear",

    description: "Har kungi obraz uchun zamonaviy aksessuar.",

    image:
      "https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=1200",

    sizes: ["Universal"],

    colors: ["Qora"],
  },

  {
    id: 10,

    name: "Ayollar Zamonaviy Ko‘ylagi",

    price: 130,

    category: "women-clothing",

    description: "Nafis bichim va qulay material.",

    image:
      "https://images.unsplash.com/photo-1483985988355-763728e1935b?w=1200",

    sizes: ["XS", "S", "M", "L", "XL"],

    colors: ["Qora", "Bej"],
  },
];

const categories = [
  { id: "all", label: "Barcha mahsulotlar" },

  { id: "men-clothing", label: "Erkaklar kiyimi" },

  { id: "women-clothing", label: "Ayollar kiyimi" },

  { id: "kids-clothing", label: "Bolalar kiyimi" },

  { id: "men-bags", label: "Erkaklar sumkasi" },

  { id: "women-bags", label: "Ayollar sumkasi" },

  { id: "men-shoes", label: "Erkaklar oyoq kiyimi" },

  { id: "women-shoes", label: "Ayollar oyoq kiyimi" },

  { id: "watches", label: "Soatlar" },

  { id: "eyewear", label: "Ko‘zoynaklar" },
];

const categoryBackgrounds = {
  all: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1800",

  "men-clothing":
    "https://images.unsplash.com/photo-1516257984-b1b4d707412e?w=1800",

  "women-clothing":
    "https://images.unsplash.com/photo-1483985988355-763728e1935b?w=1800",

  "kids-clothing":
    "https://images.unsplash.com/photo-1519238263530-99bdd11df2ea?w=1800",

  "men-bags":
    "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=1800",

  "women-bags":
    "https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=1800",

  "men-shoes":
    "https://images.unsplash.com/photo-1614252369475-531eba835eb1?w=1800",

  "women-shoes":
    "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=1800",

  watches:
    "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=1800",

  eyewear:
    "https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=1800",
};

const TELEGRAM_USERNAME = "abdulazizsobitov";

const PAYME_URL = "https://payme.uz/";
const BASE_URL = import.meta.env.BASE_URL || "/";

function readStorage(key, fallback) {
  try {
    const value = localStorage.getItem(key);

    return value ? JSON.parse(value) : fallback;
  } catch {
    return fallback;
  }
}

function getCategoryId(value) {
  const categoryMap = {
    "Erkaklar uchun kiyim": "men-clothing",

    "Bolalar uchun kiyim": "kids-clothing",

    Soatlar: "watches",

    "Erkaklar sumkasi": "men-bags",

    "Ayollar sumkasi": "women-bags",

    "Erkaklar oyoq kiyimi": "men-shoes",

    "Ayollar oyoq kiyimi": "women-shoes",

    "Ayollar kiyimi": "women-clothing",

    "Ko‘zoynaklar": "eyewear",
  };

  return categoryMap[value] || value;
}

function App() {
  const isAdminPage =
    window.location.pathname.replace(/\/+$/, "").endsWith("/admin") ||
    window.location.hash === "#/admin";
  const [products, setProducts] = useState(() => initialProducts);

  const [category, setCategory] = useState("all");

  const [search, setSearch] = useState("");

  const [sort, setSort] = useState("default");

  const heroImage = categoryBackgrounds[category] || categoryBackgrounds.all;

  const [selectedProduct, setSelectedProduct] = useState(null);

  const [selectedSize, setSelectedSize] = useState("");

  const [selectedColor, setSelectedColor] = useState("");

  const [cart, setCart] = useState(() => readStorage("china_cart", []));

  const [favorites, setFavorites] = useState(() =>
    readStorage("china_favorites", []),
  );

  const [compare, setCompare] = useState([]);

  const [showCart, setShowCart] = useState(false);

  const [showFavorites, setShowFavorites] = useState(false);

  const [showCheckout, setShowCheckout] = useState(false);

  const [showPayment, setShowPayment] = useState(false);

  const [showCompare, setShowCompare] = useState(false);

  const [paymentMethod, setPaymentMethod] = useState("telegram");

  const [location, setLocation] = useState("");

  const [locationLoading, setLocationLoading] = useState(false);

  const [orderMessage, setOrderMessage] = useState("");

  const [customer, setCustomer] = useState({
    name: "",

    phone: "",

    address: "",
  });

  useEffect(() => {
    localStorage.setItem("china_products", JSON.stringify(products));
  }, [products]);

  useEffect(() => {
    localStorage.setItem("china_cart", JSON.stringify(cart));
  }, [cart]);

  useEffect(() => {
    localStorage.setItem("china_favorites", JSON.stringify(favorites));
  }, [favorites]);

  const visibleProducts = useMemo(() => {
    let result = products.filter((product) => {
      const productCategory = getCategoryId(product.category);

      const matchesCategory =
        category === "all" || productCategory === category;

      const query = search.trim().toLowerCase();

      const categoryLabel =
        categories

          .find((item) => item.id === productCategory)

          ?.label.toLowerCase() || String(product.category || "").toLowerCase();

      const matchesSearch =
        !query ||
        String(product.name || "")
          .toLowerCase()

          .includes(query) ||
        String(product.description || "")
          .toLowerCase()

          .includes(query) ||
        categoryLabel.includes(query);

      return matchesCategory && matchesSearch;
    });

    if (sort === "cheap")
      result.sort((a, b) => Number(a.price) - Number(b.price));

    if (sort === "expensive")
      result.sort((a, b) => Number(b.price) - Number(a.price));

    if (sort === "name")
      result.sort((a, b) =>
        String(a.name || "").localeCompare(String(b.name || "")),
      );

    return result;
  }, [products, category, search, sort]);

  const cartCount = cart.reduce(
    (sum, item) => sum + (Number(item.quantity) || 0),

    0,
  );

  const totalPrice = cart.reduce(
    (sum, item) => sum + Number(item.price || 0) * (Number(item.quantity) || 0),

    0,
  );

  const activeCategory =
    categories.find((item) => item.id === category) || categories[0];

  function chooseCategory(item) {
    setCategory(item.id);

    setSelectedProduct(null);

    setSearch("");

    setSort("default");
  }

  function openProduct(product) {
    setSelectedProduct(product);

    setSelectedSize(product.sizes?.[0] || "Universal");

    setSelectedColor(product.colors?.[0] || "Standart");
  }

  function addToCart(
    product,

    size = product.sizes?.[0] || "Universal",

    color = product.colors?.[0] || "Standart",
  ) {
    setCart((current) => {
      const found = current.find(
        (item) =>
          item.id === product.id && item.size === size && item.color === color,
      );

      if (found) {
        return current.map((item) =>
          item.id === product.id && item.size === size && item.color === color
            ? { ...item, quantity: (Number(item.quantity) || 0) + 1 }
            : item,
        );
      }

      return [...current, { ...product, size, color, quantity: 1 }];
    });

    setSelectedProduct(null);

    setShowFavorites(false);

    setShowCart(true);
  }

  function toggleFavorite(product) {
    setFavorites((current) =>
      current.some((item) => item.id === product.id)
        ? current.filter((item) => item.id !== product.id)
        : [...current, product],
    );
  }

  function changeQuantity(item, amount) {
    setCart((current) =>
      current

        .map((product) =>
          product.id === item.id &&
          product.size === item.size &&
          product.color === item.color
            ? { ...product, quantity: (Number(product.quantity) || 0) + amount }
            : product,
        )

        .filter((product) => product.quantity > 0),
    );
  }

  function removeFromCart(item) {
    setCart((current) =>
      current.filter(
        (product) =>
          !(
            product.id === item.id &&
            product.size === item.size &&
            product.color === item.color
          ),
      ),
    );
  }

  function toggleCompare(product) {
    setCompare((current) => {
      if (current.some((item) => item.id === product.id)) {
        return current.filter((item) => item.id !== product.id);
      }

      if (current.length >= 3) {
        setOrderMessage("Taqqoslash uchun ko‘pi bilan 3 ta mahsulot tanlang.");

        return current;
      }

      return [...current, product];
    });
  }

  function getLocation() {
    if (!navigator.geolocation) {
      setOrderMessage("Bu qurilmada joylashuv aniqlanmaydi.");

      return;
    }

    setLocationLoading(true);

    setOrderMessage("");

    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;

        setLocation(`https://www.google.com/maps?q=${latitude},${longitude}`);

        setLocationLoading(false);

        setOrderMessage("Joylashuvingiz qo‘shildi.");
      },

      () => {
        setLocationLoading(false);

        setOrderMessage(
          "Joylashuvga ruxsat berilmadi. Manzilni qo‘lda yozing.",
        );
      },

      { enableHighAccuracy: true, timeout: 10000 },
    );
  }

  function buildOrderText(order) {
    const itemLines = order.products.map(
      (item, index) =>
        `${index + 1}. ${item.name} | ${item.size} | ${item.color} | ${item.quantity} dona | $${(item.price * item.quantity).toFixed(2)}`,
    );

    return [
      "🛍️ CHINA ABDULAZIZ — YANGI BUYURTMA",

      "",

      `👤 Ism: ${order.customer.name}`,

      `📞 Telefon: ${order.customer.phone}`,

      `📍 Manzil: ${order.customer.address}`,

      order.location ? `🗺️ Xarita: ${order.location}` : "",

      "",

      "📦 Mahsulotlar:",

      ...itemLines,

      "",

      `💰 Jami: $${order.total.toFixed(2)}`,

      `🚚 Yetkazib berish: ${order.delivery}`,

      `💳 Usul: ${
        order.method === "telegram"
          ? "Telegram orqali buyurtma"
          : "Payme orqali to‘lov"
      }`,
    ]

      .filter(Boolean)

      .join("\n");
  }

  function submitOrder(event) {
    event.preventDefault();

    if (!cart.length) {
      setOrderMessage("Savatda mahsulot yo‘q.");

      return;
    }

    if (
      !customer.name.trim() ||
      !customer.phone.trim() ||
      !customer.address.trim()
    ) {
      setOrderMessage("Ism, telefon va manzilni to‘ldiring.");

      return;
    }

    const order = {
      id: Date.now(),

      customer,

      products: cart,

      total: totalPrice,

      location,

      method: paymentMethod,

      delivery: "7–14 kun",

      createdAt: new Date().toISOString(),
    };

    const oldOrders = readStorage("china_orders", []);

    localStorage.setItem("china_orders", JSON.stringify([...oldOrders, order]));

    const message = buildOrderText(order);

    if (paymentMethod === "telegram") {
      const telegramUrl = `https://t.me/${TELEGRAM_USERNAME}?text=${encodeURIComponent(message)}`;

      window.open(telegramUrl, "_blank", "noopener,noreferrer");

      setOrderMessage(
        "Telegram ochildi. Xabarni tekshirib, Send tugmasini bosing.",
      );

      setShowCheckout(false);

      return;
    }

    setShowCheckout(false);

    setShowPayment(true);
  }

  function closeAll() {
    setShowCart(false);

    setShowFavorites(false);

    setShowCheckout(false);

    setShowPayment(false);

    setShowCompare(false);

    setOrderMessage("");
  }

  function resetFilters() {
    setSearch("");

    setCategory("all");

    setSort("default");
  }

  if (isAdminPage) {
    return (
      <AdminPanel
        products={products}
        setProducts={setProducts}
        onClose={() => {
          window.location.href = BASE_URL;
        }}
      />
    );
  }

  return (
    <div className="store">
      <div className="top-line">
        CHINA ABDULAZIZ · PREMIUM FASHION · YETKAZIB BERISH 7–14 KUN
      </div>

      <header className="site-header">
        <a className="brand" href={BASE_URL}>
          CHINA <span>ABDULAZIZ</span>
          <small>FASHION STORE</small>
        </a>
      </header>

      <div className="search-area">
        <span>⌕</span>

        <input
          value={search}
          onChange={(event) => setSearch(event.target.value)}
          placeholder="Mahsulot qidirish..."
        />

        {search && <button onClick={() => setSearch("")}>Tozalash</button>}
      </div>

      <div className="shop-shortcuts">
        <button onClick={() => setShowFavorites(true)}>
          <span>♡</span> Sevimlilar ({favorites.length})
        </button>

        <button onClick={() => setShowCompare(true)}>
          <span>⇄</span> Taqqoslash ({compare.length})
        </button>

        <button onClick={() => setShowCart(true)}>
          <span>▢</span> Savat ({cartCount})
        </button>
      </div>

      <nav className="category-nav">
        {categories.map((item) => (
          <button
            key={item.id}
            className={category === item.id ? "category active" : "category"}
            onClick={() => chooseCategory(item)}
          >
            {item.label}
          </button>
        ))}
      </nav>

      <section
        className="hero"
        style={{
          backgroundImage: `linear-gradient(90deg, rgba(15,24,19,.82), rgba(15,24,19,.12)), url("${heroImage}")`,
        }}
      >
        <div className="hero-content">
          <p>CHINA ABDULAZIZ COLLECTION</p>

          <h1>
            Nafis uslub.
            <br />
            Sifatli tanlov.
          </h1>

          <span>
            Erkaklar, ayollar va bolalar uchun tanlangan kiyimlar va
            aksessuarlar.
          </span>

          <button
            className="hero-button"
            onClick={() =>
              document

                .getElementById("products")

                ?.scrollIntoView({ behavior: "smooth" })
            }
          >
            Mahsulotlarni ko‘rish <span>→</span>
          </button>
        </div>
      </section>

      <main className="products-section" id="products">
        <div className="section-heading">
          <div>
            <p>YANGI TANLOV</p>

            <h2>{activeCategory.label}</h2>
          </div>

          <span>{visibleProducts.length} ta mahsulot</span>
        </div>

        <div className="filter-row">
          <select
            value={sort}
            onChange={(event) => setSort(event.target.value)}
          >
            <option value="default">Saralash</option>

            <option value="cheap">Arzonidan boshlab</option>

            <option value="expensive">Qimmatidan boshlab</option>

            <option value="name">Nomi bo‘yicha</option>
          </select>
        </div>

        {visibleProducts.length === 0 ? (
          <div className="empty-products">
            <h3>Mahsulot topilmadi</h3>

            <p>Boshqa qidiruv so‘zini tanlang.</p>

            <button onClick={resetFilters}>Barcha mahsulotlar</button>
          </div>
        ) : (
          <div className="product-grid">
            {visibleProducts.map((product) => (
              <article className="product-card" key={product.id}>
                <div className="product-image-wrap">
                  <img
                    src={product.image}
                    alt={product.name}
                    loading="eager"
                    onClick={() => openProduct(product)}
                    onError={(event) => {
                      event.currentTarget.src =
                        "https://placehold.co/600x800/18352c/d8bd78?text=China+Abdulaziz";
                    }}
                  />

                  <button
                    className={
                      favorites.some((item) => item.id === product.id)
                        ? "favorite-button chosen"
                        : "favorite-button"
                    }
                    onClick={() => toggleFavorite(product)}
                    aria-label="Sevimlilarga qo‘shish"
                  >
                    ♡
                  </button>

                  <button
                    className="quick-view"
                    onClick={() => openProduct(product)}
                  >
                    Batafsil ko‘rish
                  </button>
                </div>

                <div className="product-info">
                  <h3 onClick={() => openProduct(product)}>{product.name}</h3>

                  <p>{product.description}</p>

                  <div className="product-bottom">
                    <strong>${Number(product.price).toFixed(2)}</strong>

                    <button onClick={() => addToCart(product)}>
                      + Savatga
                    </button>
                  </div>

                  <button
                    className="compare-button"
                    onClick={() => toggleCompare(product)}
                  >
                    {compare.some((item) => item.id === product.id)
                      ? "✓ Tanlangan"
                      : "⇄ Taqqoslash"}
                  </button>
                </div>
              </article>
            ))}
          </div>
        )}
      </main>

      <section className="service-strip">
        <div>
          <strong>01</strong>

          <span>Tanlangan mahsulotlar</span>
        </div>

        <div>
          <strong>02</strong>

          <span>Yetkazib berish 7–14 kun</span>
        </div>

        <div>
          <strong>03</strong>

          <span>Buyurtma bo‘yicha aloqa</span>
        </div>
      </section>

      <footer className="site-footer">
        <div>
          <h2>CHINA ABDULAZIZ</h2>

          <p>Har kun uchun nafis tanlov.</p>
        </div>

        <div>
          <h3>Ma’lumot</h3>

          <p>Yetkazib berish: 7 kundan 14 kungacha.</p>

          <p>Mahsulot sifati haqida batafsil ma’lumotni sotuvchidan oling.</p>
        </div>

        <div>
          <h3>Aloqa</h3>

          <a
            href="https://t.me/abdulazizsobitov"
            target="_blank"
            rel="noreferrer"
          >
            Telegram: @abdulazizsobitov
          </a>

          <a href="tel:946699772">Telefon: 94 669 97 72</a>

          <a
            href="https://t.me/+GlNeLiUvwY9kOWQy"
            target="_blank"
            rel="noreferrer"
          >
            Telegram kanal
          </a>

          <a
            href="https://taplink.cc/china_abdulaziz"
            target="_blank"
            rel="noreferrer"
          >
            Instagram / Taplink
          </a>
        </div>
      </footer>

      {selectedProduct && (
        <div
          className="modal-backdrop"
          onClick={() => setSelectedProduct(null)}
        >
          <div
            className="product-modal"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              className="close-button"
              onClick={() => setSelectedProduct(null)}
            >
              ×
            </button>

            <img
              className="detail-image"
              src={selectedProduct.image}
              alt={selectedProduct.name}
              onError={(event) => {
                event.currentTarget.src =
                  "https://placehold.co/600x800/18352c/d8bd78?text=China+Abdulaziz";
              }}
            />

            <div className="detail-content">
              <p className="eyebrow">CHINA ABDULAZIZ</p>

              <h2>{selectedProduct.name}</h2>

              <strong className="detail-price">
                ${Number(selectedProduct.price).toFixed(2)}
              </strong>

              <p>{selectedProduct.description}</p>

              <h4>O‘lchamni tanlang</h4>

              <div className="option-list">
                {(selectedProduct.sizes || ["Universal"]).map((size) => (
                  <button
                    key={size}
                    className={
                      selectedSize === size ? "option selected" : "option"
                    }
                    onClick={() => setSelectedSize(size)}
                  >
                    {size}
                  </button>
                ))}
              </div>

              <h4>Rangni tanlang</h4>

              <div className="option-list">
                {(selectedProduct.colors || ["Standart"]).map((color) => (
                  <button
                    key={color}
                    className={
                      selectedColor === color ? "option selected" : "option"
                    }
                    onClick={() => setSelectedColor(color)}
                  >
                    {color}
                  </button>
                ))}
              </div>

              <p className="delivery-note">Yetkazib berish: 7–14 kun</p>

              <button
                className="primary-button"
                onClick={() =>
                  addToCart(selectedProduct, selectedSize, selectedColor)
                }
              >
                Savatga qo‘shish
              </button>
            </div>
          </div>
        </div>
      )}

      {(showCart ||
        showFavorites ||
        showCheckout ||
        showPayment ||
        showCompare) && (
        <div className="modal-backdrop" onClick={closeAll}>
          <div
            className="side-modal"
            onClick={(event) => event.stopPropagation()}
          >
            <button className="close-button" onClick={closeAll}>
              ×
            </button>

            {showCompare ? (
              <>
                <p className="eyebrow">TAQQOSLASH</p>

                <h2>Mahsulotlarni taqqoslash</h2>

                {compare.length === 0 ? (
                  <p>Taqqoslash uchun mahsulot tanlang.</p>
                ) : (
                  compare.map((item) => (
                    <div className="cart-row" key={item.id}>
                      <img src={item.image} alt={item.name} />

                      <div>
                        <strong>{item.name}</strong>

                        <p>${Number(item.price).toFixed(2)}</p>

                        <small>{(item.sizes || []).join(", ")}</small>

                        <button onClick={() => toggleCompare(item)}>
                          Olib tashlash
                        </button>
                      </div>
                    </div>
                  ))
                )}
              </>
            ) : showPayment ? (
              <>
                <p className="eyebrow">TO‘LOV</p>

                <h2>Payme orqali to‘lash</h2>

                <p>
                  Buyurtma summasi: <strong>${totalPrice.toFixed(2)}</strong>
                </p>

                <p className="delivery-note">
                  Bu umumiy Payme sahifasi. Haqiqiy buyurtma summasini avtomatik
                  to‘lash uchun Payme merchant checkout ulanishi kerak.
                </p>

                <a
                  className="primary-button"
                  href={PAYME_URL}
                  target="_blank"
                  rel="noreferrer"
                >
                  Payme’ni ochish →
                </a>

                <p className="order-message">
                  To‘lovdan oldin summa va qabul qiluvchini tekshiring.
                </p>
              </>
            ) : showCheckout ? (
              <>
                <p className="eyebrow">BUYURTMA</p>

                <h2>Ma’lumotlaringiz</h2>

                <form className="checkout-form" onSubmit={submitOrder}>
                  <label>Ism familiya</label>

                  <input
                    value={customer.name}
                    onChange={(event) =>
                      setCustomer({ ...customer, name: event.target.value })
                    }
                    placeholder="Ismingiz"
                    required
                  />

                  <label>Telefon raqami</label>

                  <input
                    type="tel"
                    value={customer.phone}
                    onChange={(event) =>
                      setCustomer({ ...customer, phone: event.target.value })
                    }
                    placeholder="+998 90 123 45 67"
                    required
                  />

                  <label>Manzil</label>

                  <textarea
                    value={customer.address}
                    onChange={(event) =>
                      setCustomer({ ...customer, address: event.target.value })
                    }
                    placeholder="Yetkazib berish manzili"
                    required
                  />

                  <button
                    type="button"
                    className="location-button"
                    onClick={getLocation}
                    disabled={locationLoading}
                  >
                    {locationLoading
                      ? "Joylashuv aniqlanmoqda..."
                      : location
                        ? "✓ Joylashuv qo‘shildi"
                        : "📍 Joylashuvimni qo‘shish"}
                  </button>

                  {location && (
                    <p className="delivery-note">
                      Xarita joylashuvi buyurtmaga qo‘shiladi.
                    </p>
                  )}

                  <p className="delivery-note">Yetkazib berish: 7–14 kun.</p>

                  <h4>Buyurtma usulini tanlang</h4>

                  <div className="payment-choice">
                    <button
                      type="button"
                      className={
                        paymentMethod === "telegram"
                          ? "option selected"
                          : "option"
                      }
                      onClick={() => setPaymentMethod("telegram")}
                    >
                      Telegram orqali{" "}
                    </button>

                    <button
                      type="button"
                      className={
                        paymentMethod === "payme" ? "option selected" : "option"
                      }
                      onClick={() => setPaymentMethod("payme")}
                    >
                      Payme orqali
                    </button>
                  </div>

                  <button className="primary-button" type="submit">
                    {paymentMethod === "telegram"
                      ? "Telegramga buyurtma yuborish"
                      : "Payme bo‘limiga o‘tish"}
                  </button>

                  {orderMessage && (
                    <p className="order-message">{orderMessage}</p>
                  )}
                </form>
              </>
            ) : showFavorites ? (
              <>
                <p className="eyebrow">SAQLANGANLAR</p>

                <h2>Sevimli mahsulotlar</h2>

                {favorites.length === 0 ? (
                  <p>Hozircha sevimli mahsulot yo‘q.</p>
                ) : (
                  favorites.map((item) => (
                    <div className="cart-row" key={item.id}>
                      <img src={item.image} alt={item.name} />

                      <div>
                        <strong>{item.name}</strong>

                        <p>${Number(item.price).toFixed(2)}</p>

                        <button onClick={() => addToCart(item)}>
                          Savatga qo‘shish
                        </button>

                        <button onClick={() => toggleFavorite(item)}>
                          O‘chirish
                        </button>
                      </div>
                    </div>
                  ))
                )}
              </>
            ) : (
              <>
                <p className="eyebrow">SIZNING TANLOVINGIZ</p>

                <h2>Savat ({cartCount})</h2>

                {cart.length === 0 ? (
                  <p>Savatingiz hozircha bo‘sh.</p>
                ) : (
                  <>
                    {cart.map((item) => (
                      <div
                        className="cart-row"
                        key={`${item.id}-${item.size}-${item.color}`}
                      >
                        <img src={item.image} alt={item.name} />

                        <div>
                          <strong>{item.name}</strong>

                          <p>${Number(item.price).toFixed(2)}</p>

                          <small>
                            {item.size} · {item.color}
                          </small>

                          <div className="quantity-control">
                            <button onClick={() => changeQuantity(item, -1)}>
                              −
                            </button>

                            <span>{item.quantity}</span>

                            <button onClick={() => changeQuantity(item, 1)}>
                              +
                            </button>
                          </div>

                          <button onClick={() => removeFromCart(item)}>
                            O‘chirish
                          </button>
                        </div>
                      </div>
                    ))}

                    <div className="cart-total">
                      <span>Jami</span>

                      <strong>${totalPrice.toFixed(2)}</strong>
                    </div>

                    <button
                      className="compare-button"
                      onClick={() => setCart([])}
                    >
                      Savatni tozalash
                    </button>

                    <button
                      className="primary-button"
                      onClick={() => {
                        setShowCart(false);

                        setShowCheckout(true);
                      }}
                    >
                      Buyurtma berish
                    </button>
                  </>
                )}
              </>
            )}

            {orderMessage && !showCheckout && (
              <p className="order-message">{orderMessage}</p>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
