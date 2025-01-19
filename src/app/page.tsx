import Link from "next/link";

const mockURL = [
  "https://9ikcqz2gxn.ufs.sh/f/huxzmsdSjr2J5TB3IMV89cA6bJWKnC5BRItp2v3qgQakdeE1",
  "https://9ikcqz2gxn.ufs.sh/f/huxzmsdSjr2J0ov0sBiBKh3AYjft4aRvMZ7eE2FNXmHpPciI",
  "https://9ikcqz2gxn.ufs.sh/f/huxzmsdSjr2JOT5mS82SNWamXF6flng0ezMVpHwDtYUEb7y9",
  "https://9ikcqz2gxn.ufs.sh/f/huxzmsdSjr2Jez5rqftZk6lUqNOne1MpPrVi2B8H7zQbsWTS",
];

const mockImages = mockURL.map((url, index) => ({
  id: index + 1,
  url,
}));

export default function HomePage() {
  return (
    <main className="">
      <div className="flex flex-wrap gap-4">
        {[...mockImages, ...mockImages, ...mockImages].map((image, idx) => (
          <div key={`${image.id}-${idx}`} className="w-48">
            <img src={image.url} />
          </div>
        ))}
      </div>
      <p>Hello (gallery in progress)</p>
    </main>
  );
}
