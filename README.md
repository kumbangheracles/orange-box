# **Orange Box**

## 🇬🇧 English (EN)

**Orange Box** is an **IoT-based smart trash bin** project designed to automatically **sort waste** and provide **real-time monitoring** through an integrated **web dashboard**.  
This project combines **hardware automation** and **web technologies** to support a more efficient and eco-friendly waste management system.

At its core, **Raspberry Pi 5** functions as the main controller that operates the sensors, servo motors, and classification logic.  
It detects the type of waste (organic or inorganic) using proximity or camera sensors, then automatically directs it to the appropriate bin using servo motors.  
Meanwhile, **ultrasonic sensors** measure the fill level of each compartment and send the data to the cloud.

The **Next.js web dashboard** is directly connected to the device, displaying real-time data such as:
- Bin fill levels  
- Waste type statistics (organic vs inorganic)  

Users can also receive **notifications** when a bin is full.

**Orange Box** demonstrates the integration of **IoT, automation, and modern web frameworks**, making it a scalable and educational solution for smart waste management, suitable for schools, institutions, and smart city systems.

**Technologies Used:**
- Raspberry Pi 5 (main controller)  
- Python (device control logic)  
- Next.js (web dashboard framework)  
- TailwindCSS / Ant Design (UI)  
- Blynk Cloud / AWS SES (real-time data & notifications)

---

## 🇮🇩 Bahasa Indonesia (ID)

**Orange Box** adalah proyek **tempat sampah pintar berbasis IoT** yang dirancang untuk melakukan **pemilahan sampah otomatis** serta menyediakan **pemantauan real-time** melalui **dashboard web** yang terhubung langsung dengan perangkat.  
Proyek ini menggabungkan **otomasi perangkat keras** dan **teknologi web modern** untuk mendukung sistem pengelolaan sampah yang **efisien dan ramah lingkungan**.

Sebagai pusat kendali, **Raspberry Pi 5** mengatur sensor, motor servo, serta logika klasifikasi sampah.  
Perangkat ini mendeteksi jenis sampah (organik atau anorganik) menggunakan sensor proximity atau kamera, kemudian **menggerakkan servo** untuk mengarahkan sampah ke wadah yang sesuai.  
Sementara itu, **sensor ultrasonik** mengukur volume masing-masing wadah dan mengirim data ke server cloud.

**Dashboard web Next.js** terhubung langsung dengan alat dan menampilkan data secara real-time, seperti:
- Tingkat volume wadah  
- Statistik jenis sampah (organik vs anorganik)  

Pengguna juga dapat menerima **notifikasi otomatis** ketika tong sampah penuh.

**Orange Box** merupakan contoh nyata integrasi antara **IoT, otomasi, dan framework web modern**, menjadikannya solusi **inovatif dan edukatif** dalam pengelolaan sampah cerdas untuk sekolah, instansi, maupun sistem smart city.

**Teknologi yang Digunakan:**
- Raspberry Pi 5 (pengendali utama)  
- Python (logika kendali perangkat)  
- Next.js (framework dashboard web)  
- TailwindCSS / Ant Design (UI)  
- Blynk Cloud / AWS SES (data & notifikasi real-time)

---

**© 2025 Orange Box Project — Smart Waste Sorting System**




This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.


