const form = document.getElementsByClassName("form")[0];

form.onsubmit = async (e) => {
    e.preventDefault();

    let formData = new FormData(form);
    let xhr = new XMLHttpRequest();
    
    xhr.open("POST", "https://digital-spectr.com/ac/academy.php");
    xhr.send(formData);
    xhr.onerror = () => alert("Ошибка соединения");
    xhr.onload = () => alert(xhr.response);
  };