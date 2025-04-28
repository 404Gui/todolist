'use client'
import styles from "./styles.module.css";
import { useState, useEffect } from 'react';
import Header from "@/components/TodolistComponents/Header/Header";
import SearchBar from "@/components/TodolistComponents/SearchBar/SearchBar";
import FilterSelect from "@/components/TodolistComponents/FilterSelect/FilterSelect";
import ThemeToggle from "@/components/TodolistComponents/ThemeToggle/ThemeToggle";
import TaskList from "@/components/TodolistComponents/TaskList/TaskList";
import AddTaskButton from "@/components/TodolistComponents/AddTaskButton/AddTaskButton";
import TaskModal from "@/components/TodolistComponents/TaskModal/TaskModal";

export default function Board() {
  const [dark, setDark] = useState(false);
  const [open, setOpen] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const [items, setItems] = useState([]);  
  const [isClient, setIsClient] = useState(false);
  const [valueFilter, setValueFilter] = useState(10);
  const [editItemIndex, setEditItemIndex] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredItems, setFilteredItems] = useState(items);


  const handleOpen = () => setOpen(true);
  const handleClose = () => {    
    setOpen(false);
    setInputValue('');
    setEditItemIndex(null);
  } 

  useEffect(() => {

    console.log('Filtro aplicado:', valueFilter);
    console.log('Itens antes do filtro:', items);
    const newFilteredItems = items.filter((item) => {
      const matchSearch = item.text.toLowerCase().includes(searchTerm.toLowerCase());
  
      switch (valueFilter) {
        case 10: 
          return matchSearch; 
  
        case 20:
          return matchSearch && item.checked;
  
        case 30:
          return matchSearch && !item.checked;
  
        default: 
          return matchSearch;
      };

      console.log(`Item ${item.text} passa no filtro:`, result);
      return result;

    });

    console.log('Itens filtrados:', newFilteredItems);
  
    setFilteredItems(newFilteredItems);
  }, [items, searchTerm, valueFilter]);
  


  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (isClient) {
      const savedItems = localStorage.getItem('todoItem');
      if (savedItems) {
        setItems(JSON.parse(savedItems));
      }
    }
  }, [isClient]);

  useEffect(() => {
    if (isClient) {
      localStorage.setItem('todoItem', JSON.stringify(items));
    }
  }, [items, isClient]);


  const handleAddItem = () => {
    if (inputValue.trim()) {
      const newItem = { text: inputValue, checked: false };
      setItems([...items, newItem]);
      setInputValue('');
    }
  };

  const handleChangeChbk = (index) => {
    const updatedItems = [...items];
    updatedItems[index].checked = !updatedItems[index].checked;
    setItems(updatedItems);
  };
  

  const handleDeleteItem = (index) => {
    const updatedItems = items.filter((_, i) => i !== index);
    setItems(updatedItems);

    if (updatedItems.length === 0) {
      setEditItemIndex(null);
    }
  };

  const handleEditItem = (index) => {
    setEditItemIndex(index)
    setInputValue(items[index].text);
    setOpen(true)
    
  };

  const handleSaveItem = () => {
    const updatedItems = items.map((item, i) =>
      i === editItemIndex ? { ...item, text: inputValue } : item
    );
    setItems(updatedItems);
    handleClose();
  };

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const handleChangeDark = () => {
    setDark((darkLight) => !darkLight);
  };

  const handleChangeFilter = (event) => {
    setValueFilter(event.target.value);
  };  

  return (
    <>
      <div className={`${styles.wrapper} ${dark ? styles.darkTheme : styles.lightTheme}`}>
        <div className={styles.conteudo}>
          <Header dark={dark} />
          
          <div className={styles.searchContent}>
            <SearchBar dark={dark} searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
            <FilterSelect dark={dark} valueFilter={valueFilter} handleChangeFilter={handleChangeFilter} />
            <ThemeToggle dark={dark} handleChangeDark={handleChangeDark} />
          </div>

          <TaskList 
            filteredItems={filteredItems} 
            dark={dark}
            handleChangeChbk={handleChangeChbk}
            handleEditItem={handleEditItem}
            handleDeleteItem={handleDeleteItem}
          />

          <AddTaskButton handleOpen={handleOpen} />
          
          <TaskModal
            open={open}
            dark={dark}
            editItemIndex={editItemIndex}
            inputValue={inputValue}
            setInputValue={setInputValue}
            handleClose={handleClose}
            handleAddItem={handleAddItem}
            handleSaveItem={handleSaveItem}
          />
        </div>
      </div>
    </>
  );
}