# คู่มือแก้ข้อความ + ราคา · Content Editing Guide

> เอกสารนี้สำหรับ **คนที่ไม่ใช่ developer** — แก้คำพูด/ราคา/รูป โดยไม่ต้องเข้าใจโค้ด.

---

## 🗂️ โครงสร้างไฟล์ที่แก้ได้ · Files you can edit

ทุกอย่างที่แก้ได้อยู่ในโฟลเดอร์ **`content/`** กับ **`public/images/`** เท่านั้น
ไฟล์อื่นๆ เป็นโค้ด ไม่ต้องไปแก้.

```
content/
├── marina.ts         👉 ชื่อ ที่อยู่ เบอร์ พิกัด GPS สเปกท่าเรือ
├── pricing.ts        👉 ราคาท่าจอด · สูตรคำนวณ · 3 แพ็กเกจ
├── services.ts       👉 รายการบริการ + amenities บนท่า
├── tours.ts          👉 ทัวร์ พร้อมราคาและจุดเด่น
├── reviews.ts        👉 รีวิวลูกค้า
├── gallery.ts        👉 รูปในหน้า Gallery
└── approach.ts       👉 คำแนะนำกัปตัน + ตัวเลขสถิติ

public/images/        👉 รูปจริงของ marina (ดู section ด้านล่าง)
```

---

## ✏️ ตัวอย่าง: แก้ราคา

เปิดไฟล์ **`content/pricing.ts`** แล้วแก้บรรทัดที่ต้องการ:

```ts
export const BOOKING_RATES = {
  baseRatePerMeter: 220,   // ← แก้เลขนี้เพื่อเปลี่ยนราคาฐาน บาท/เมตร/วัน
  multihullFactor: 1.5,    // ← คาตามารัน คูณเท่าไหร่ของ monohull
  deepDraftThreshold: 1.8, // ← เกินกี่เมตรเริ่มชาร์จเพิ่ม
  deepDraftFactor: 1.1,    // ← ชาร์จเพิ่มกี่เปอร์เซ็นต์ (1.1 = +10%)
  ...
};
```

หรือแก้ราคาทัวร์ใน **`content/tours.ts`**:

```ts
{
  slug: "dugong",
  title: "Dugong Sanctuary Expedition",
  duration: "Half day · 4 hours",
  price: 4500,            // ← แก้เลขนี้
  ...
}
```

**Save → refresh browser → ราคาใหม่ขึ้นทันที** (dev server reload อัตโนมัติ).

---

## ✏️ ตัวอย่าง: แก้ข้อความ

เช่น เปลี่ยนเบอร์โทร เปิด **`content/marina.ts`**:

```ts
contact: {
  phone: "+66 75 000 000",        // ← เบอร์ออฟฟิศ
  whatsapp: "+66 81 000 0000",    // ← เบอร์ WhatsApp (มี + และ space ก็ได้)
  whatsappLink: "https://wa.me/66810000000", // ← ตัดสัญลักษณ์ +/space ออก
  email: "berth@klongsonmarina.com",
  ...
}
```

หรือแก้ tagline บนหน้าแรก:

```ts
tagline: "Your Natural Safe Haven in the Andaman Sea",
//                                 ↑ แก้ตรงนี้ระหว่างเครื่องหมายคำพูด
```

---

## 🔧 กฎสำคัญในการแก้

1. **ห้ามลบเครื่องหมาย `,` ท้ายบรรทัด** (TypeScript จะ error)
2. **ห้ามลบเครื่องหมาย `"` ครอบข้อความ** (string ต้องอยู่ใน double quotes)
3. **ตัวเลขราคา ห้ามใส่ `,`** — ใช้ `4500` ไม่ใช่ `4,500`
4. ถ้าหน้าเว็บโชว์ error แดงๆ — กด Ctrl+Z ในไฟล์เพื่อย้อน แล้ว save ใหม่.

---

## 🖼️ ใส่รูปจริงของ Marina · Adding Real Photos

### ขั้นตอน

1. เก็บรูป 4 ใบ ใส่โฟลเดอร์ `D:\KlongsonMarina\public\images\` ตามชื่อไฟล์นี้:

   | บันทึกชื่อ                      | รูปที่ใช้                          |
   |----------------------------------|------------------------------------|
   | `marina-aerial.jpg`              | drone shot ของท่าเรือจริง          |
   | `yachts-mangrove.jpg`            | ท่าจอดเรือพื้นหลัง mangrove        |
   | `catamaran-sunset.jpg`           | catamaran ใน mangrove ตอน sunset   |
   | `dugong.jpg`                     | dugong ใต้น้ำ                      |

2. เปิดไฟล์ **`lib/images.ts`** บรรทัดที่ 11:

   ```ts
   const USE_LOCAL = false;  // ← เปลี่ยนเป็น true
   ```

3. Save → refresh browser → รูปจริงทั้งหมดขึ้น.

ถ้ายังไม่พร้อม save รูป ปล่อย `USE_LOCAL = false` ไว้ — เว็บจะใช้ Unsplash placeholder แทน.

### เพิ่มรูปใน Gallery

แก้ไฟล์ **`content/gallery.ts`** เพิ่มเอนทรีใหม่:

```ts
{
  id: "g13",                              // ตั้งไอดี ไม่ซ้ำ
  src: "/images/my-new-photo.jpg",        // หรือ URL ตรง
  alt: "ท่าจอดมุมเช้า",
  category: "Aerial",                     // เลือก "Aerial"|"Facilities"|"Tours"|"Dugong"
},
```

---

## 🔁 หลังแก้ทุกครั้ง

```bash
# Dev mode — เห็นผลทันทีไม่ต้อง restart
npm run dev

# ถ้าต้อง deploy — build แล้วค่อย push ขึ้น Vercel
npm run build
```

---

## ❓ FAQ

**Q: แก้ทัวร์ใหม่ จะเพิ่ม slot ที่ 5 ได้มั้ย?**
A: ได้ครับ ใน `content/tours.ts` — copy block ของทัวร์เดิม วางเพิ่ม แก้เนื้อ เปลี่ยน slug ให้ไม่ซ้ำ.

**Q: เปลี่ยนสีแบรนด์ได้มั้ย?**
A: ได้ — แก้ตัวแปร CSS ใน `app/globals.css` ใต้ `@theme { ... }`. แต่ถ้า reskin ทั้งเว็บแนะนำให้ Dev ดู.

**Q: รีวิว 11 อันได้มั้ย?**
A: ได้ — เพิ่มเอนทรีใน `content/reviews.ts` หน้าเว็บจะ grid auto.

**Q: ถ้าหน้าเว็บพังหลัง edit ทำยังไง?**
A: เปิด terminal ที่รัน `npm run dev` อ่านบรรทัดที่บอก error — มันจะชี้ไฟล์/บรรทัดที่พิมพ์ผิดให้.
