"use client";

import Image from "next/image";
import { Modal } from "antd";
import { useState } from "react";
const About = () => {
  const [openModal, setOpenModal] = useState<boolean>(false);
  const [selectedId, setSelectedId] = useState<number>(0);

  const handleOpen = (id: number) => {
    setOpenModal(true);
    setSelectedId(id);
  };

  const techList = [
    {
      id: 1,
      name: "Raspberry Pi 5",
      icon: "/images/rasp5.png",
      description:
        "Raspberry Pi 5 berfungsi sebagai pengendali utama perangkat keras pada sistem OrangeBox, mengelola sensor, kamera, dan motor servo melalui GPIO serta menjalankan logika pemilahan sampah otomatis.",
      link: "https://www.raspberrypi.com/products/raspberry-pi-5/",
    },
    {
      id: 2,
      name: "Python",
      icon: "/icons/python.svg",
      description:
        "Python digunakan untuk menulis logika kendali perangkat keras di Raspberry Pi, termasuk pembacaan sensor, kontrol servo, pengolahan data kamera, dan komunikasi dengan server melalui API atau Blynk IoT.",
      link: "https://www.python.org/doc/",
    },
    {
      id: 3,
      name: "Next.js",
      icon: "/icons/nextjs.svg",
      description:
        "Next.js menjadi framework utama untuk membangun dashboard web OrangeBox yang menampilkan data real-time dari perangkat IoT serta menyediakan antarmuka monitoring yang modern dan responsif.",
      link: "https://nextjs.org/docs",
    },
    {
      id: 4,
      name: "Tailwind CSS",
      icon: "/icons/tailwind.svg",
      description:
        "Tailwind digunakan sebagai framework styling untuk membangun tampilan antarmuka dashboard yang konsisten, cepat dikembangkan, dan mudah dikustomisasi tanpa menulis CSS secara manual.",
      link: "https://tailwindcss.com/docs",
    },
    {
      id: 5,
      name: "Ant Design (Antd)",
      icon: "/icons/antd.svg",
      description:
        "Ant Design menyediakan komponen UI modern seperti tabel, grafik, dan modal yang digunakan dalam dashboard OrangeBox agar tampilan data terlihat profesional dan interaktif.",
      link: "https://ant.design/docs/react/introduce",
    },
    {
      id: 6,
      name: "Blynk IoT",
      icon: "/images/blynk.png",
      description:
        "Blynk digunakan untuk menghubungkan Raspberry Pi dengan cloud IoT, memungkinkan pengiriman dan penerimaan data sensor secara real-time antara perangkat fisik dan dashboard web.",
      link: "https://docs.blynk.io/",
    },
    {
      id: 7,
      name: "Zoho",
      icon: "/icons/zoho-logo-web.svg",
      description:
        "Zoho digunakan sebagai platform integrasi untuk kebutuhan manajemen data, notifikasi, dan automasi operasional yang berkaitan dengan laporan dan pengelolaan sistem OrangeBox.",
      link: "https://www.zoho.com/docs/",
    },
    {
      id: 8,
      name: "TensorFlow",
      icon: "/images/tensor.png",
      description:
        "TensorFlow digunakan untuk pemrosesan kecerdasan buatan (AI) pada sistem kamera, khususnya dalam model klasifikasi jenis sampah (organik, anorganik, logam, dan plastik).",
      link: "https://www.tensorflow.org/docs",
    },
    {
      id: 9,
      name: "Keras AI",
      icon: "/images/keras.png",
      description:
        "Keras digunakan sebagai library machine learning tingkat tinggi yang berjalan di atas TensorFlow, memudahkan pembuatan dan pelatihan model AI yang digunakan dalam fitur pemilahan sampah otomatis.",
      link: "https://keras.io/api/",
    },
    {
      id: 10,
      name: "Chart.js",
      icon: "/icons/chartjs.svg",
      description:
        "Chart.js digunakan di dashboard OrangeBox untuk menampilkan data sensor, performa perangkat, dan statistik pemilahan sampah dalam bentuk grafik interaktif yang informatif dan mudah dipahami pengguna.",
      link: "https://www.chartjs.org/docs/latest/",
    },
  ];

  return (
    <div className="p-4 bg-white rounded-md border-tyrel-low">
      <h4 className="font-bold! text-2xl tracking-wider">Orange Box</h4>

      <div className="sm:text-base text-[12px] tracking-wider">
        <p>
          Orange Box adalah proyek tempat sampah pintar berbasis IoT yang
          dirancang untuk melakukan pemilahan sampah otomatis serta menyediakan
          pemantauan real-time melalui dashboard web yang terhubung langsung
          dengan perangkat. Proyek ini menggabungkan otomasi perangkat keras dan
          teknologi web modern untuk mendukung sistem pengelolaan sampah yang
          efisien dan ramah lingkungan.
        </p>

        <p>
          Sebagai pusat kendali, Raspberry Pi 5 mengatur sensor, motor servo,
          serta logika klasifikasi sampah. Perangkat ini mendeteksi jenis sampah
          (organik atau anorganik) menggunakan sensor proximity atau kamera,
          kemudian menggerakkan servo untuk mengarahkan sampah ke wadah yang
          sesuai. Sementara itu, sensor ultrasonik mengukur volume masing-masing
          wadah dan mengirim data ke server cloud.
        </p>

        <p>
          Dashboard web Next.js terhubung langsung dengan alat dan menampilkan
          data secara real-time, seperti:
        </p>

        <ul className="list-disc list-inside flex flex-col px-4">
          <li>Tingkat volume sampah</li>
          <li>Statistik jenis sampah</li>
        </ul>

        <p>
          Pengguna juga dapat menerima notifikasi otomatis ketika tong sampah
          penuh.
        </p>
        <p>
          Orange Box merupakan contoh nyata integrasi antara IoT, otomasi, dan
          framework web modern, menjadikannya solusi inovatif dan edukatif dalam
          pengelolaan sampah cerdas untuk sekolah, instansi, maupun sistem smart
          city.
        </p>

        <p>Teknologi yang Digunakan:</p>
        <div className="flex flex-wrap gap-4 justify-center w-full">
          {techList.map((selectedItem) => (
            <div
              key={selectedItem.id}
              className="group p-4 w-[100px] h-[100px] sm:w-[200px] sm:h-[200px] border-2 border-tyrel-medium rounded-md flex items-center justify-center flex-col gap-4 cursor-pointer transition-all"
              onClick={() => handleOpen(selectedItem.id)}
            >
              <div className=" w-[70px] h-[70px] sm:w-[100px] sm:h-[100px] overflow-hidden rounded-md transform transition-transform duration-300 group-hover:scale-125">
                <Image
                  src={selectedItem.icon}
                  width={100}
                  height={100}
                  className="w-full h-full object-contain"
                  alt={`${selectedItem.name}-img`}
                />
              </div>

              <span className="font-semibold hidden sm:block sm:text-base tracking-wider">
                {selectedItem.name}
              </span>
            </div>
          ))}
        </div>
      </div>

      <Modal
        open={openModal}
        closable
        onCancel={() => setOpenModal(false)}
        footer={false}
      >
        {techList
          .filter((selectedItem) => selectedItem.id === selectedId)
          .map((selectedItem) => (
            <div
              className="flex flex-col items-center gap-4 text-center"
              key={selectedItem.id}
            >
              <Image
                src={selectedItem.icon}
                width={120}
                height={120}
                alt={selectedItem.name}
                className="object-contain"
              />
              <h2 className="text-lg font-semibold">{selectedItem.name}</h2>
              <p className="text-[12px] sm:text-[16px] text-gray-500">
                {selectedItem.description}
              </p>
              <a
                href={selectedItem.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-tyrel-low hover:underline no-underline cursor-pointer"
              >
                Lihat Dokumentasi →
              </a>
            </div>
          ))}
      </Modal>
    </div>
  );
};

export default About;
