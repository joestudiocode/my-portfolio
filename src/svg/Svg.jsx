export default function ChatBubble({
  message = "Pesan default di sini. Bubble ini menyesuaikan isi teks agar tetap proporsional dan tail terlihat lebih natural.",
  isUser = false, // false = kiri, true = kanan
}) {
  const baseStyle = {
    fontFamily: "'Poppins', sans-serif",
    fontWeight: "500",
    fontSize: "13px",
    padding: "8% 12% 8% 16%", // Tambah padding kiri untuk tail kiri
    wordBreak: "break-word",
    lineHeight: "1.5",
  };

  return (
    <div
      className={`relative inline-block max-w-[60%] min-w-40 min-h-[70px] m-3 ${
        isUser ? "self-end" : "self-start"
      }`}
      style={{
        alignSelf: isUser ? "flex-end" : "flex-start",
      }}
    >
      {/* Lapisan bawah (bayangan / border) */}
      <div
        className={`absolute inset-0 ${
          isUser ? "bg-[#0D0D0D]" : "bg-white"
        } border border-white`}
        style={{
          clipPath: isUser
            ? "polygon(0% 90%, 92% 75%, 96% 55%, 100% 57%, 100% 49%, 100% 58%, 92% 34%, 93% 44%, 90% 40%, 87% 20%, 0% 29%, 0% 90%)"
            : "polygon(5% 80%, 97% 70%, 94% 50%, 98% 52%, 98% 45%, 100% 48%, 95% 30%, 93% 38%, 90% 34%, 87% 15%, 5% 25%, 5% 80%)",
        }}
      ></div>

      {/* Isi bubble */}
      <div
        className={`relative border border-white rounded-lg flex items-center ${
          isUser ? "bg-white text-black" : "bg-[#0D0D0D] text-white"
        }`}
        style={{
          ...baseStyle,
          clipPath: isUser
            ? "polygon(0% 88%, 94% 74%, 91% 55%, 95% 57%, 96% 49%, 99% 57%, 93% 36%, 92% 44%, 89% 40%, 86% 20%, 0% 29%, 0% 88%)"
            : "polygon(6% 78%, 96% 69%, 93% 52%, 97% 53%, 97% 47%, 99% 50%, 94% 31%, 92% 39%, 89% 34%, 86% 16%, 6% 25%, 6% 78%)",
        }}
      >
        {message}
      </div>
    </div>
  );
}
