"use client";
import styles from "./products.module.css";
import { useEffect, useState } from "react";
import Image from "next/image";
import Button from "../button/Button";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [deletedProducts, setDeletedProducts] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((resp) => resp.json())
      .then((result) => setProducts(result));
  }, []);

  const handleDelete = (product) => {
    setProducts(products.filter((item) => item.id !== product.id));
    setDeletedProducts([...deletedProducts, product]);
  };

  return (
    <>
      <div className={styles.productContainer}>
        {products.map((item) => (
          <div className={styles.itemWrapper} key={item.id}>
            <Image src={item.image} width={100} height={80} alt={item.title} />
            <div>
              <h3 className={styles.title}>{item.title}</h3>
              <p className={styles.desc}>{item.description}</p>
            </div>
            <div className={styles.btnCont}>
              <Button title={"Delete"} handleClick={() => handleDelete(item)} />
            </div>
          </div>
        ))}
      </div>
      {deletedProducts.length > 0 && (
        <div>
          <h2 className={styles.deletedTitle}>Deleted Products</h2>
          <div className={styles.deletedSection}>
            {deletedProducts.map((item) => (
              <div className={styles.itemWrapper} key={item.id}>
                <Image
                  src={item.image}
                  width={100}
                  height={80}
                  alt={item.title}
                />
                <div>
                  <p>{item.title}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default Products;
