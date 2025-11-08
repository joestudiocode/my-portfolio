export default function ChatBubble({
  message = "Pesan default di sini. Bubble ini menyesuaikan isi teks agar tetap proporsional dan tidak mepet ke dinding.",
  isUser = false, // false = kiri, true = kanan
}) {
  const baseStyle = {
    fontFamily: "'Poppins', sans-serif",
    fontWeight: "500",
    fontSize: "13px",
    padding: "6% 10%",
    wordBreak: "break-word",
    lineHeight: "1.5",
  };

  return (
    <div
      className={`relative inline-block max-w-[60%] min-w-[160px] min-h-[70px] m-3 ${
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
            ? "polygon(5% 90%, 95% 75%, 92% 55%, 96% 57%, 97% 49%, 100% 58%, 94% 34%, 93% 44%, 90% 40%, 87% 20%, 2% 29%, 5% 90%)"
            : "polygon(3% 80%, 97% 70%, 94% 50%, 98% 52%, 98% 45%, 100% 48%, 95% 30%, 93% 38%, 90% 34%, 87% 15%, 1% 25%, 3% 80%)",
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
            ? "polygon(6% 88%, 94% 74%, 91% 55%, 95% 57%, 96% 49%, 99% 57%, 93% 36%, 92% 44%, 89% 40%, 86% 20%, 3% 29%, 6% 88%)"
            : "polygon(4% 78%, 96% 69%, 93% 52%, 97% 53%, 97% 47%, 99% 50%, 94% 31%, 92% 39%, 89% 34%, 86% 16%, 2% 25%, 4% 78%)",
        }}
      >
        {message}
      </div>
    </div>
  );
}
