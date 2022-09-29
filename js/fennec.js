var imgs = [
	toImg('FO3MqXDXEAsk2if.png'), 
	toImg('FO-7CvxWYAAF7nE.jpg'),
	toImg('FOaBAvcXoAQ6k9v.jpg'),
	toImg('FOaOt11WUAMzxei.jpg'),
	toImg('FObTYdzXMAQleNu.jpg'),
	toImg('FOdqchIWUBIzR31.jpg'),
	toImg('FOe82SyXoBMrVSU.jpg'),
	toImg('FOhhpB1XwAElr6M.jpg'),
	toImg('FO_kPfHXsAQieuy.jpg'),
	toImg('FOlY1ZhXMAAGk_y.jpg'),
	toImg('FOMSE70XoAE2AyK.jpg'),
	toImg('FOo0jhRWYAo1F-J.jpg'),
	toImg('FOpdwJZXsAoFLDi.jpg'),
	toImg('FOwVNNfXwAMtZoK.jpg'),
	toImg('FOzjM_JXMAQMkBY.jpg'),
	toImg('FPIyw1tXwAA2FtJ.jpg'),
	toImg('FPPcejCWUAA8Fod.jpg'),
	toImg('FPQu5FiXwAcSnfc.jpg'),
	toImg('FPS4NUWWYAEMSF1.jpg'),
	toImg('FPSqePXXEAUcMMF.jpg'),
	toImg('FPTF8HcXIAYIMAO.jpg'),
	toImg('FPUKmxRWUAsiaij.jpg'),
	toImg('FPUmElvWUAE4mtM.jpg'), 
	toImg('FPa0Vl4XMAEbx6t.jpg'), 
	toImg('FPammPMXoAAlQIh.jpg'),
	toImg('FPb4_OKXoBUFL6T.jpg'),
	toImg('FPcGuE4WYAoAxnI.jpg'),
	toImg('FPX0EC_XMAEDHz_.jpg'),
	toImg('FPZvqDIWQAIEtyw.jpg')
]

document.querySelector(".fenneco").innerHTML = imgs[Math.floor(Math.random() * imgs.length)];

function toImg(src) {
  return `<img alt="fennec :)" src="/assets/fennecs/${src}" title="fennec :)">`;
}

