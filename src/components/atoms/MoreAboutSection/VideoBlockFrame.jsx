export default function VideoBlockFrame({ src, className = "" }) {
  return (
    <div
      className={`
        overflow-hidden bg-white border-[#F3D9D8]

        /* ✅ PHONE (430×1261): exact size 264.0625×500px */
        w-[264.0625px] h-[500px] border-[8px] rounded-[45px]
        
        /* ✅ TABLET+ (≥640px, <1920): adaptive sizes - плавні переходи */
        min-[640px]:w-[220px] min-[640px]:h-[420px] min-[640px]:border-[8px] min-[640px]:rounded-[45px]
        min-[768px]:w-[230px] min-[768px]:h-[440px]
        min-[1033px]:w-[260px] min-[1033px]:h-[500px] min-[1033px]:border-[10px] min-[1033px]:rounded-[50px]
        min-[1280px]:w-[300px] min-[1280px]:h-[560px]
        min-[1536px]:w-[320px] min-[1536px]:h-[600px]

        /* ✅ EXACT 1920 */
        min-[1920px]:w-[338px] min-[1920px]:h-[640px]
        min-[1920px]:border-[10px] min-[1920px]:rounded-[50px]

        ${className}
      `}
    >
      <video className="w-full h-full object-cover" src={src} controls type="video/mp4">
      </video>
    </div>
  );
}
