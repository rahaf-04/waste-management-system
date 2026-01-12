function addWaste() {
    const input = document.getElementById("wasteInput");
    const list = document.getElementById("wasteList");

    if (input.value !== "") {
        const li = document.createElement("li");
        li.textContent = input.value;
        list.appendChild(li);
        input.value = ""; // لمسح الخانة بعد الإضافة
    }
}
