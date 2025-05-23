import Head from "next/head";
import React, { useEffect, useState } from "react";
import MainLayout from "@/components/common/layouts/MainLayout";
import PageTitle from "@/components/common/PageTitle";
import { foodData } from "@/Data";
import FoodsMap from "@/components/pages/foods/FoodsMap";
import FoodMapSkeleton from "@/components/pages/foods/FoodMapSkeleton";
import FoodSearch from "@/components/pages/foods/FoodSearch";
import NewBtn from "@/components/pages/foods/NewBtn";
import FoodBtn from "@/components/pages/foods/FoodBtn";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Button,
} from "@mui/material";
import useFetchApiItems from "@/hooks/useFetchApiItems";
export default function Foods() {
  // const [foods, setFoods] = useState(null);
  const [searchValue, setSearchValue] = useState("");
  const [filteredFoods, setFilteredFoods] = useState([]);
  const [openDialog, setOpenDialog] = useState(false);
  const [selectedId, setSelectedId] = useState(null);
  const [selected, setSelected] = useState("left");
  // const [isLoading, setIsLoading] = useState(true);

  // useEffect(() => {
  //   fetch("http://192.168.100.108:1337/api/foods?populate=*&Asilbek=true", {
  //     method: "GET",
  //   })
  //     .then((response) => response.json())
  //     .then((data) => {
  //       console.log(data.data);
  //       // setFoods(data.data);
  //       // setIsLoading(false);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //       // setIsLoading(false);
  //     });
  // }, []);

  const [foods, isLoading] = useFetchApiItems("/foods?populate=*&Asilbek=true");

  // useEffect(() => {
  //   const timeout = setTimeout(() => {
  //     setFoods(foodData);
  //   }, 1000);
  //   return () => clearTimeout(timeout);
  // }, []);

  useEffect(() => {
    if (foods && searchValue.length > 0) {
      const filtered = foods.filter((item) =>
        item.name.toLowerCase().includes(searchValue.toLowerCase())
      );
      setFilteredFoods(filtered);
    }
  }, [searchValue, foods]);

  const handleDeleteClick = (id) => {
    setSelectedId(id);
    setOpenDialog(true);
  };

  const confirmDelete = () => {
    setFoods((items) => items.filter((item) => item.id !== selectedId));
    setOpenDialog(false);
    setSelectedId(null);
  };

  const cancelDelete = () => {
    setOpenDialog(false);
    setSelectedId(null);
  };

  return (
    <>
      <Head>
        <title>Foods</title>
      </Head>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          maxWidth: "1400px",
          margin: "0 auto",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            marginBottom: "55px",
          }}
        >
          <PageTitle
            title="Foods"
            subtitle="Here is your menus summary with graph view"
          />
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "26px",
            }}
          >
            <FoodSearch onChange={setSearchValue} />
            <FoodBtn selected={selected} onSelect={setSelected} />
            <NewBtn />
          </div>
        </div>

        {foods ? (
          searchValue.length > 0 ? (
            filteredFoods.length > 0 ? (
              <FoodsMap data={filteredFoods} />
            ) : (
              <h1
                style={{
                  textAlign: "center",
                }}
              >
                Food topilmadi!
              </h1>
            )
          ) : (
            <>
              <FoodsMap
                data={foods}
                handleDeleteClick={handleDeleteClick}
                selected={selected}
              />
              <Dialog
                open={openDialog}
                onClose={cancelDelete}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
              >
                <DialogTitle id="alert-dialog-title">
                  O`chirishni tasdiqlaysizmi?
                </DialogTitle>
                <DialogContent>
                  <DialogContentText id="alert-dialog-description">
                    <strong>
                      {foods?.find((item) => item.id === selectedId)?.name}
                    </strong>
                    ni rostan ham o`chirmoqchimisiz? Bu amalni qaytarib
                    bo`lmaydi.
                  </DialogContentText>
                </DialogContent>
                <DialogActions>
                  <Button onClick={cancelDelete} color="primary">
                    Bekor qilish
                  </Button>
                  <Button onClick={confirmDelete} color="error" autoFocus>
                    O`chirish
                  </Button>
                </DialogActions>
              </Dialog>
            </>
          )
        ) : (
          <FoodMapSkeleton count={3} />
        )}
      </div>
    </>
  );
}

Foods.getLayout = (pageProps) => (
  <MainLayout>
    <Foods {...pageProps} />
  </MainLayout>
);
