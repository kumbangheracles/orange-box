"use client";
const Footer = () => {
  return (
    <div className=" text-white">
      <div className="flex bg-tyrel-medium p-4 justify-center sm:min-h-[300px] gap-3 sm:gap-[100px] items-center text-center flex-wrap">
        <span className="sm:w-[30%] w-full text-center tracking-wider px-4 py-2 sm:px-0 sm:py-0 sm:text-base sm:text-start text-sm">
          Didanai oleh Direktorat Penelitian dan Pengabdian kepada Masyarakat,
          Direktorat Jenderal Riset dan Pengembangan Kementerian Pendidikan
          Tinggi, Sains, dan Teknologi Tahun Anggaran 2025, Nomor SP DIPA-
          139.04.1.693320/2025
        </span>

        <div className="visitor flex flex-col gap-3">
          <span className="font-semibold tracking-wider">Pengunjung</span>
          <div>
            <a href="https://info.flagcounter.com/yk7n">
              <img
                className="w-[200px]"
                src="https://s01.flagcounter.com/count2/yk7n/bg_FFFFFF/txt_000000/border_CCCCCC/columns_2/maxflags_10/viewers_0/labels_0/pageviews_0/flags_0/percent_0/"
                alt="Flag Counter"
              />
            </a>
          </div>
        </div>
      </div>

      <div className="bg-tyrel-high p-4 text-center font-semibold tracking-wider">
        <span className="text-[10px] sm:text-sm">
          © 2025. Everything Made With ❤️ by Alphabet Incubator
        </span>
      </div>
    </div>
  );
};

export default Footer;
