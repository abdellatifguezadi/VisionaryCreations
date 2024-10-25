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


function LoginFonctin(){
    const Sign_Up = document.getElementById('Sign_Up');
    const login = document.getElementById('login');

    Sign_Up.classList.remove('flex');
    Sign_Up.classList.add('hidden');

    login.classList.remove('hidden');
    login.classList.add('flex');

}
function SignFonctin(){
    const Sign_Up = document.getElementById('Sign_Up');
    const login = document.getElementById('login');

    Sign_Up.classList.remove('hidden');
    Sign_Up.classList.add('flex');
    
    login.classList.remove('flex');
    login.classList.add('hidden');

}