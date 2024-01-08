//display modal on click

const modalWrapper = document.querySelector(".modals-wrapper")
if(modalWrapper){
    function displayModal(id){
        const modal = document.getElementById(id);
        modalWrapper.style.display = "flex";
        modal.style.display = "flex";
    }
}