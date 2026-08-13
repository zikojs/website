---
title: Zikojs Overview
description: Zikojs Overview
sidebar:
    label : نظرة عامة
    order : 0
---

ZikoJS هو نظام بيئي (Ecosystem) معياري مبني بلغة JavaScript، يهدف إلى توفير لبنات أساسية منخفضة المستوى وقوية للحوسبة الرياضية، وبناء واجهات المستخدم، ومعالجة البيانات المتقدمة.

حزمة ziko تمثل النواة (Core) الخاصة بنظام ZikoJS البيئي. وهي لا تعتمد على أي حزم خارجية، بينما يشير اسم ZikoJS إلى النظام البيئي الكامل الذي يضم جميع الحزم والأدوات المرتبطة به.

تتكون حزمة النواة ziko من الوحدات الأساسية التالية:

Math: أدوات عددية وبدائل رياضية أساسية
UI: لبنات منخفضة المستوى لبناء واجهات المستخدم تعتمد على HyperScript، وتجريدات DOM
Time: أدوات مرتبطة بالوقت، الجدولة، والمساعدات الزمنية
Router: وحدات توجيه خفيفة للتنقل وإدارة انتقالات الحالة
Hooks: وحدات منطق تفاعلي وقابل للتركيب (Composable)
Events: تجريد موحّد للتعامل مع الأحداث

تشكل هذه الوحدات نواة مستقرة وخفيفة (Kernel) يُبنى عليها باقي النظام البيئي.

## Ecosystem Components
Beyond the core, ZikoJS includes additional packages and tools that extend functionality while remaining aligned with the core design principles:

- **ziko-server** : server-side utilities and abstractions built on top of the ziko core
- **ziko-wrapper** : integration and wrapper utilities for connecting ZikoJS with external environments or frameworks
- **mdzjs** : Markdown-driven tooling and content processing within the ZikoJS ecosystem
- **zextra** : a collection of additional UI components