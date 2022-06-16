import QRCode from "easyqrcodejs-nodejs";

export const generateQr = async (id: string) => {
  const qr = new QRCode({
    text: id,
    width: 256,
    height: 256,
    correctLevel: QRCode.CorrectLevel.H,
    logoBackgroundTransparent: true,
    title: id,
    titleColor: "#004284",
  });

  const SVGText = await qr.toSVGText();

  return SVGText;
};
