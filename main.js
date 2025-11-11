function h() { document.getElementById("b").style.backgroundColor = ("rgb(13, 24, 180)")}
/* النمط الأساسي للعنصر */
.box {
  width: 150px;
  height: 150px;
  background-color: #3498db; /* لون أزرق */
  transition: transform 0.3s ease; /* يجعل الانتقال سلساً */
}

/* النمط عند مرور المؤشر فوق العنصر */
.box:hover {
  transform: scale(1.2); /* يزيد حجم العنصر بنسبة 20% */
}
