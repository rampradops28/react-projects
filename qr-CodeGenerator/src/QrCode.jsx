import { useState } from "react"

export const QrCode = () => {

  const [img, setImg] = useState("")
  const [loading, setLoading] = useState(false)
  const [qrData, setQrData] = useState("")
  const [qrSize, setQrSize] = useState(150)
  function generateQR(){
    setLoading(true);
    try{
      const url = `https://api.qrserver.com/v1/create-qr-code/?size=${qrSize}x${qrSize}&data=${encodeURIComponent(qrData)}`
      setImg(url)
    } catch (err){
      console.log(e.error)
    } finally{
      setLoading(false)
    } 
  }
  
  function downloadQR(){
    fetch(img).then( (response) => response.blob())
    .then((blob) => {
      const link = document.createElement("a");
      link.href = URL.createObjectURL(blob) //blob => file type (binary format data - converted to image using URL.createObjectURL )
      link.download = "qrcode.png"
      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)
    }).catch((error) => {
      console.error("Error downloading QR code" , error)
    })
  }

  return (
   <div> 
     <div className="app-container">
        <h1>QR CODE GENERATOR</h1>
        {loading && <p>Please wait ....</p>}
        {img && <img src={img} className="qr-code-img" alt="qr-code-img"/>}
   </div>

        <label htmlFor="dataInput" className="input-label">Data for QR code:</label>
        <input  type="text" id="dataInput" value={qrData} placeholder="Enter data for QR code" onChange={(e) => {
          setQrData(e.target.value)
        }}/>

        <label htmlFor="sizeInput" className="input-label">image size (e.g., 150):</label>
        <input type="text" id="sizeInput" placeholder="Enter image size" value={qrSize} onChange={(e) => {
          setQrSize(e.target.value)
        }}/>

        <button className="generate-btn" onClick={generateQR}>Generate QR Code</button>
        <button className="download-btn" onClick={downloadQR}>Download QR Code</button>
        </div>
  )
}
