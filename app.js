document.getElementById("BMI").addEventListener("submit",function(event){
    event.preventDefault();
    const w = 
  parseFloat(document.getElementById("Weight").value);
    const h = 
  parseFloat(document.getElementById("Height").value)/100;
    
    const bmi = (w/(h**2)).toFixed(2);
    
    document.getElementById("total").innerHTML = `Bmi ของคุณคือ ${bmi}`;
    //ข้อความที่ต้องการแทรกค่าตัวแปรลงไปด้ววต้องใช้เครื่องหมาย `` แล้วต้องใส่ตัวแปรลงใน ${ตัวแปร}
  
  if(bmi<18.50){
    document.getElementById("results").innerHTML="น้ำหนักน้อยกว่ามาตรฐาน"}
  else if (bmi<22.91){
    document.getElementById("results").innerHTML="น้ำหนักปกติ"}
  else if (bmi<24.91){
    document.getElementById("results").innerHTML="ท้วม / อ้วนระดับ 1"}
  else if (bmi<29.91){
    document.getElementById("results").innerHTML="อ้วน / อ้วนระดับ 2"}
  else if (bmi<40.1){
    document.getElementById("results").innerHTML="อ้วนมาก / อ้วนระดับ 3"}
    else{
        document.getElementById("results").innerHTML="กรุณากรอกข้อมูลให้ถูกต้องด้วยครับ"}
    })
    