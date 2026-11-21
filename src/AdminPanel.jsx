import React, { useRef, useState } from "react";

export default function AdminPanel({ products, setProducts, onClose }) {
  const emptyForm = {
    name: "",
    price: "",
    category: "men-clothing",
    image: "",
    description: "",
  };

  const [form, setForm] = useState(emptyForm);
  const [editId, setEditId] = useState(null);
  const fileRef = useRef(null);

  const categories = [
    { id: "men-clothing", label: "Erkaklar kiyimi" },
    { id: "kids-clothing", label: "Bolalar kiyimi" },
    { id: "watches", label: "Soatlar" },
    { id: "men-bags", label: "Erkaklar sumkasi" },
    { id: "women-bags", label: "Ayollar sumkasi" },
    { id: "men-shoes", label: "Erkaklar oyoq kiyimi" },
    { id: "women-shoes", label: "Ayollar oyoq kiyimi" },
    { id: "women-clothing", label: "Ayollar kiyimi" },
    { id: "eyewear", label: "Ko‘zoynaklar" },
  ];

  const updateField = (e) => {
    setForm((old) => ({
      ...old,
      [e.target.name]: e.target.value,
    }));
  };

  const chooseImage = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;

    if (!["image/jpeg", "image/png", "image/webp"].includes(file.type)) {
      alert("JPG, PNG yoki WEBP rasm tanlang.");
      e.target.value = "";
      return;
    }

    if (file.size > 5 * 1024 * 1024) {
      alert("Rasm hajmi 5 MB dan oshmasin.");
      e.target.value = "";
      return;
    }

    const reader = new FileReader();

    reader.onload = () => {
      setForm((old) => ({
        ...old,
        image: reader.result,
      }));
    };

    reader.readAsDataURL(file);
  };

  const saveProduct = (e) => {
    e.preventDefault();

    if (!form.name.trim() || !form.price || !form.image) {
      alert("Nom, narx va rasmni kiriting.");
      return;
    }

    const price = Number(form.price);

    if (!Number.isFinite(price) || price <= 0) {
      alert("Narxni to‘g‘ri kiriting.");
      return;
    }

    const productData = {
      id: editId ?? Date.now(),
      name: form.name.trim(),
      price,
      category: form.category,
      image: form.image,
      description: form.description.trim(),
      rating: 5,
      sizes: ["S", "M", "L", "XL", "XXL"],
      colors: ["Qora", "Oq", "Ko‘k", "Kulrang"],
    };

    if (editId !== null) {
      setProducts((old) =>
        old.map((item) =>
          item.id === editId ? { ...item, ...productData } : item,
        ),
      );
    } else {
      setProducts((old) => [productData, ...old]);
    }

    setForm(emptyForm);
    setEditId(null);

    if (fileRef.current) fileRef.current.value = "";

    alert("Mahsulot muvaffaqiyatli saqlandi!");
  };

  const editProduct = (product) => {
    setEditId(product.id);

    setForm({
      name: product.name || "",
      price: String(product.price || ""),
      category: product.category || "men-clothing",
      image: product.image || "",
      description: product.description || "",
    });

    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const deleteProduct = (id) => {
    if (!window.confirm("Mahsulotni o‘chirmoqchimisiz?")) return;

    setProducts((old) => old.filter((item) => item.id !== id));

    if (editId === id) {
      setForm(emptyForm);
      setEditId(null);
    }
  };

  const cancelEdit = () => {
    setForm(emptyForm);
    setEditId(null);
    if (fileRef.current) fileRef.current.value = "";
  };

  const money = (price) => `${Number(price).toLocaleString("uz-UZ")} so‘m`;

  return (
    <div style={s.page}>
      <header style={s.header}>
        <div>
          <div style={s.logo}>
            CHINA <span>ABDULAZIZ</span>
          </div>
          <div style={s.brandSub}>PREMIUM COLLECTION · MANAGEMENT</div>
        </div>

        <button style={s.backButton} onClick={onClose}>
          ← Saytga qaytish
        </button>
      </header>

      <main style={s.container}>
        <section style={s.welcome}>
          <div>
            <p style={s.eyebrow}>BOSHQARUV MARKAZI</p>
            <h1>Admin panel</h1>
            <p style={s.muted}>China Abdulaziz do‘koningizni boshqaring.</p>
          </div>

          <div style={s.stat}>
            <span>JAMI MAHSULOTLAR</span>
            <strong>{products.length}</strong>
          </div>
        </section>

        <section style={s.formCard}>
          <div style={s.formHeading}>
            <div>
              <p style={s.eyebrow}>MAHSULOTLAR</p>
              <h2>
                {editId !== null
                  ? "Mahsulotni tahrirlash"
                  : "Yangi mahsulot qo‘shish"}
              </h2>
            </div>
            <span style={s.goldMark}>✦</span>
          </div>

          <form onSubmit={saveProduct}>
            <div style={s.fields}>
              <div>
                <label style={s.label}>Mahsulot nomi</label>
                <input
                  style={s.input}
                  name="name"
                  value={form.name}
                  onChange={updateField}
                  placeholder="Masalan: Premium Cashmere"
                  required
                />
              </div>

              <div>
                <label style={s.label}>Narxi (so‘m)</label>
                <input
                  style={s.input}
                  name="price"
                  type="number"
                  min="1"
                  value={form.price}
                  onChange={updateField}
                  placeholder="1900000"
                  required
                />
              </div>

              <div style={s.full}>
                <label style={s.label}>Kategoriya</label>
                <select
                  style={s.input}
                  name="category"
                  value={form.category}
                  onChange={updateField}
                >
                  {categories.map((item) => (
                    <option key={item.id} value={item.id}>
                      {item.label}
                    </option>
                  ))}
                </select>
              </div>

              <div style={s.full}>
                <label style={s.label}>Mahsulot rasmi</label>

                <label style={s.upload}>
                  <span style={{ fontSize: 35 }}>＋</span>
                  <strong>Kompyuterdan rasm tanlash</strong>
                  <small>JPG · PNG · WEBP · Maksimal 5 MB</small>

                  <input
                    ref={fileRef}
                    type="file"
                    accept="image/png,image/jpeg,image/webp"
                    onChange={chooseImage}
                    style={{ display: "none" }}
                  />
                </label>

                {form.image && (
                  <div style={s.previewBox}>
                    <img
                      src={form.image}
                      alt="Mahsulot ko‘rinishi"
                      style={s.preview}
                    />
                    <button
                      type="button"
                      style={s.removeButton}
                      onClick={() => {
                        setForm((old) => ({ ...old, image: "" }));
                        if (fileRef.current) fileRef.current.value = "";
                      }}
                    >
                      Rasmni olib tashlash
                    </button>
                  </div>
                )}
              </div>

              <div style={s.full}>
                <label style={s.label}>Yoki rasm URL manzili</label>
                <input
                  style={s.input}
                  value={form.image.startsWith("data:") ? "" : form.image}
                  onChange={(e) =>
                    setForm((old) => ({
                      ...old,
                      image: e.target.value,
                    }))
                  }
                  placeholder="https://example.com/image.jpg"
                />
              </div>

              <div style={s.full}>
                <label style={s.label}>Mahsulot tavsifi</label>
                <textarea
                  style={{ ...s.input, minHeight: 110, resize: "vertical" }}
                  name="description"
                  value={form.description}
                  onChange={updateField}
                  placeholder="Mahsulot haqida ma’lumot..."
                />
              </div>
            </div>

            <button type="submit" style={s.saveButton}>
              {editId !== null
                ? "O‘ZGARISHLARNI SAQLASH"
                : "＋ MAHSULOTNI QO‘SHISH"}
            </button>

            {editId !== null && (
              <button type="button" style={s.cancelButton} onClick={cancelEdit}>
                Bekor qilish
              </button>
            )}
          </form>
        </section>

        <section style={s.listSection}>
          <div style={s.listHeading}>
            <div>
              <p style={s.eyebrow}>DO‘KON INVENTARI</p>
              <h2>Mahsulotlar ro‘yxati</h2>
            </div>
            <span style={s.count}>{products.length} ta</span>
          </div>

          {products.length === 0 ? (
            <div style={s.empty}>Hozircha mahsulotlar mavjud emas.</div>
          ) : (
            <div style={s.productList}>
              {products.map((product) => (
                <article key={product.id} style={s.productCard}>
                  <img
                    src={product.image}
                    alt={product.name}
                    style={s.productImage}
                  />

                  <div style={s.productDetails}>
                    <h3>{product.name}</h3>
                    <strong>{money(product.price)}</strong>
                    <small>
                      {categories.find((item) => item.id === product.category)
                        ?.label || product.category}
                    </small>
                  </div>

                  <div style={s.actions}>
                    <button
                      style={s.editButton}
                      onClick={() => editProduct(product)}
                    >
                      Tahrirlash
                    </button>

                    <button
                      style={s.deleteButton}
                      onClick={() => deleteProduct(product.id)}
                    >
                      O‘chirish
                    </button>
                  </div>
                </article>
              ))}
            </div>
          )}
        </section>
      </main>

      <footer style={s.footer}>CHINA ABDULAZIZ · ADMINISTRATION</footer>
    </div>
  );
}

const s = {
  page: {
    minHeight: "100vh",
    background: "#292B20",
    color: "#E9E1D0",
    fontFamily: "'DM Sans', Arial, sans-serif",
  },
  header: {
    padding: "25px 6%",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    flexWrap: "wrap",
    gap: 18,
    borderBottom: "1px solid #555640",
  },
  logo: {
    fontFamily: "'Playfair Display', Georgia, serif",
    fontSize: 25,
    letterSpacing: 2,
    fontWeight: 700,
  },
  brandSub: {
    marginTop: 7,
    fontSize: 9,
    letterSpacing: 3,
    color: "#B7A982",
  },
  backButton: {
    padding: "13px 20px",
    background: "#A99B7B",
    color: "#292B20",
    border: 0,
    cursor: "pointer",
  },
  container: {
    width: "min(1050px, 90%)",
    margin: "auto",
  },
  welcome: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    flexWrap: "wrap",
    gap: 25,
    padding: "45px 0 35px",
  },
  eyebrow: {
    color: "#B7A982",
    fontSize: 10,
    letterSpacing: 3,
  },
  welcomeTitle: {
    fontFamily: "'Playfair Display', Georgia, serif",
  },
  muted: {
    color: "#C1BBAA",
    fontSize: 13,
  },
  stat: {
    padding: "22px 30px",
    border: "1px solid #777653",
    display: "flex",
    flexDirection: "column",
    gap: 8,
    color: "#C9BEA4",
    fontSize: 10,
    letterSpacing: 2,
  },
  statNumber: {
    fontSize: 32,
    color: "#E9E1D0",
  },
  formCard: {
    padding: "35px",
    background: "#35382A",
    border: "1px solid #686B4D",
    marginBottom: 55,
  },
  formHeading: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 28,
  },
  formTitle: {
    fontFamily: "'Playfair Display', Georgia, serif",
    fontSize: 27,
    fontWeight: 500,
  },
  goldMark: {
    color: "#C1AD82",
    fontSize: 35,
  },
  fields: {
    display: "grid",
    gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
    gap: 20,
  },
  full: {
    gridColumn: "1 / -1",
  },
  label: {
    display: "block",
    marginBottom: 9,
    color: "#D5C9AD",
    fontSize: 12,
  },
  input: {
    width: "100%",
    boxSizing: "border-box",
    padding: "14px",
    background: "#292B20",
    color: "#F2EBDD",
    border: "1px solid #686B4D",
    outline: "none",
    borderRadius: 0,
  },
  upload: {
    minHeight: 150,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    gap: 10,
    border: "1px dashed #A99B7B",
    color: "#E9E1D0",
    cursor: "pointer",
    background: "#292B20",
    textAlign: "center",
  },
  uploadHint: {
    fontSize: 11,
    color: "#B7A982",
  },
  previewBox: {
    marginTop: 18,
    textAlign: "center",
  },
  preview: {
    display: "block",
    width: "100%",
    maxWidth: 280,
    height: 230,
    margin: "auto",
    objectFit: "contain",
    background: "#292B20",
  },
  removeButton: {
    marginTop: 12,
    padding: 10,
    background: "#686B4D",
    color: "#fff",
    border: 0,
    cursor: "pointer",
  },
  saveButton: {
    width: "100%",
    padding: 17,
    marginTop: 25,
    background: "#A99B7B",
    color: "#292B20",
    border: 0,
    letterSpacing: 2,
    fontWeight: 700,
    cursor: "pointer",
  },
  cancelButton: {
    width: "100%",
    padding: 13,
    marginTop: 10,
    background: "transparent",
    color: "#E9E1D0",
    border: "1px solid #777653",
    cursor: "pointer",
  },
  listSection: {
    paddingBottom: 60,
  },
  listHeading: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 25,
  },
  listTitle: {
    fontFamily: "'Playfair Display', Georgia, serif",
    fontSize: 29,
    fontWeight: 500,
  },
  count: {
    padding: "9px 16px",
    background: "#686B4D",
    color: "#fff",
  },
  productList: {
    display: "grid",
    gap: 12,
  },
  productCard: {
    display: "flex",
    alignItems: "center",
    flexWrap: "wrap",
    gap: 18,
    padding: 15,
    background: "#35382A",
    border: "1px solid #555640",
  },
  productImage: {
    width: 85,
    height: 100,
    objectFit: "cover",
    background: "#292B20",
  },
  productDetails: {
    flex: 1,
    minWidth: 160,
  },
  productName: {
    fontFamily: "'Playfair Display', Georgia, serif",
    fontSize: 17,
    fontWeight: 500,
  },
  productPrice: {
    display: "block",
    color: "#C1AD82",
    marginBottom: 8,
  },
  productCategory: {
    color: "#B7A982",
    fontSize: 11,
  },
  actions: {
    display: "flex",
    flexWrap: "wrap",
    gap: 8,
  },
  editButton: {
    padding: "10px 13px",
    background: "#A99B7B",
    color: "#292B20",
    border: 0,
    cursor: "pointer",
  },
  deleteButton: {
    padding: "10px 13px",
    background: "#714B43",
    color: "#fff",
    border: 0,
    cursor: "pointer",
  },
  empty: {
    padding: 40,
    textAlign: "center",
    border: "1px solid #555640",
    color: "#C1BBAA",
  },
  footer: {
    padding: 25,
    textAlign: "center",
    borderTop: "1px solid #555640",
    color: "#B7A982",
    fontSize: 10,
    letterSpacing: 3,
  },
};
