function showImg(src) {
    const imgContainer = document.getElementById('imageContainer');
    const srcImg = document.getElementById('folioFullImg');
    srcImg.src = src; 

    imgContainer.classList.remove('hidden');
    imgContainer.classList.add('flex'); 

}
function hideImg() {
    const imgContainer = document.getElementById('imageContainer');
    imgContainer.classList.add('hidden');
}