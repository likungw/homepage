import { Publication } from "../types/publication";

export const publications: Publication[] = [
  {
    title: "SparStencil: Retargeting Sparse Tensor Cores to Scientific Stencil Computations via Structured Sparsity Transformation",
    authors: "Qi Li, Kun Li*, Haozhi Han, Liang Yuan, Junshi Chen, Yunquan Zhang, Yifeng Chen, Hong An, Ting Cao, Mao Yang",
    journal: "SC 2025",
    date: "2025",
    link: "https://arxiv.org/abs/2506.22969",
    corresponding: true,
    award: "Best Student Paper Award Finalist"
  },
  {
    title: "From Deep Learning to Deep Science: AI Accelerators Scaling Quantum Chemistry Beyond Limits",
    authors: "Haozhi Han, Kun Li*, Fusong Ju, Qi Li, Yifeng Chen, Yunquan Zhang, Ting Cao, Mao Yang",
    journal: "SC 2025",
    date: "2025",
    link: "",
    corresponding: true
  },
  {
    title: "Matryoshka: Optimization of Dynamic Diverse Quantum Chemistry Systems via Elastic Parallelism Transformation",
    authors: "Tuowei Wang, Kun Li*, Donglin Bai, Fusong Ju, Leo Xia, Ju Ren, Yaoxue Zhang, Ting Cao, Mao Yang",
    journal: "To be appeared",
    date: "2025",
    link: "https://arxiv.org/abs/2412.13203",
    corresponding: true
  },
  {
    title: "JENGA: Enhancing LLM Long-Context Fine-tuning with Contextual Token Sparsity",
    authors: "Tuowei Wang, Xingyu Chen, Kun Li, Ting Cao, Ju Ren, Yaoxue Zhang",
    journal: "ATC 2025",
    date: "2025",
    link: "https://www.usenix.org/system/files/atc25-wang-tuowei.pdf"
  },
  {
    title: "Neuralink: Fast LLM Inference on Smartphones with Neuron Co-Activation Linking",
    authors: "Tuowei Wang, Ruwen Fan, Minxing Huang, Zixu Hao, Kun Li, Ting Cao, Youyou Lu, Yaoxue Zhang, Ju Ren",
    journal: "ASPLOS 2025",
    date: "2025",
    link: "https://arxiv.org/abs/2410.19274"
  },
  {
    title: "FlashFFTStencil: Bridging Fast Fourier Transforms to Memory-Efficient Stencil Computations on Tensor Core Units",
    authors: "Haozhi Han, Kun Li*, Wei Cui, Donglin Bai, Yiwei Zhang, Liang Yuan, Yifeng Chen, Yunquan Zhang, Ting Cao, Mao Yang",
    journal: "PPoPP 2025",
    date: "2025",
    link: "../pdf/ppopp25_FlashFFTStencil.pdf",
    corresponding: true
  },
  {
    title: "Jigsaw: Toward Conflict-free Vectorized Stencil Computation by Tessellating Swizzled Registers",
    authors: "Yiwei Zhang, Kun Li*, Liang Yuan, Haozhi Han, Yunquan Zhang, Ting Cao, Mao Yang",
    journal: "PPoPP 2025",
    date: "2025",
    link: "../pdf/ppopp25_Jigsaw.pdf",
    corresponding: true
  },
  {
    title: "LoRAStencil: Low-Rank Adaptation of Stencil Computation on Tensor Cores",
    authors: "Yiwei Zhang, Kun Li*, Liang Yuan, Jiawen Cheng, Yunquan Zhang, Ting Cao, Mao Yang",
    journal: "SC 2024",
    date: "2024",
    link: "../pdf/sc24_lorastencil.pdf",
    corresponding: true,
    award: "Reproducibility Challenge Finalist"
  },
  {
    title: "LONG EXPOSURE: Accelerating Parameter-Efficient Fine-Tuning for LLMs under Shadowy Sparsity",
    authors: "Tuowei Wang, Kun Li*, Zixu Hao, Donglin Bai, Ju Ren, Yaoxue Zhang, Ting Cao, Mao Yang",
    journal: "SC 2024",
    date: "2024",
    link: "../pdf/sc24_longexposure.pdf",
    corresponding: true
  },
  {
    title: "VNEC: A Vectorized Non-Empty Column Format for SpMV on CPUs",
    authors: "Luhan Wang, Haipeng Jia, Lei Xu, Cunyang Wei, Kun Li, Xianmeng Jiang, Yunquan Zhang",
    journal: "IPDPS 2024",
    date: "2024",
    link: "https://ieeexplore.ieee.org/stamp/stamp.jsp?tp=&arnumber=10579118"
  },
  {
    title: "ConvStencil: Transform Stencil Computation to Matrix Multiplication on Tensor Cores",
    authors: "Yuetao Chen, Kun Li*, Yuhao Wang, Donglin Bai, Lei Wang, Lingxiao Ma, Liang Yuan, Yunquan Zhang, Ting Cao, Mao Yang",
    journal: "PPoPP 2024",
    date: "2024",
    link: "../pdf/ppopp24_ConvStencil.pdf",
    corresponding: true,
    award: "Best Paper Award"
  },
  {
    title: "OpenFFT: An Adaptive Tuning Framework for 3D FFT on ARM Multicore CPUs",
    authors: "Tun Chen, Haipeng Jia, Yunquan Zhang, Kun Li, Zhihao Li, Xiang Zhao, Jianyu Yao",
    journal: "ICS 2023",
    date: "2023",
    link: ""
  },
  {
    title: "AGCM-3DLF: Accelerating Atmospheric General Circulation Model via 3D Parallelization and Leap-Format",
    authors: "Hang Cao, Liang Yuan, He Zhang, Yunquan Zhang, Baodong Wu, Kun Li, Shigang Li, Minghua Zhang, Pengqi Lu, Junmin Xiao",
    journal: "TPDS 2023",
    date: "2023",
    link: ""
  },
  {
    title: "EgpuIP: An Embedded GPU Accelerated Library for Image Processing",
    authors: "Luhan Wang, Haipeng Jia, Yunquan Zhang, Kun Li, Cunyang Wei",
    journal: "HPCC 2022",
    date: "2022",
    link: ""
  },
  {
    title: "LBBGEMM: A Load-Balanced Batch GEMM Framework on ARM CPUs",
    authors: "Cunyang Wei, Haipeng Jia, Yunquan Zhang, Kun Li, Luhan Wang",
    journal: "HPCC 2022",
    date: "2022",
    link: ""
  },
  {
    title: "An Efficient Vectorization Scheme for Stencil Computation",
    authors: "Kun Li, Liang Yuan, Yunquan Zhang, Yue Yue, Hang Cao",
    journal: "IPDPS 2022",
    date: "2022",
    link: "https://arxiv.org/pdf/2103.08825"
  },
  {
    title: "An Accurate and Efficient Large-scale Regression Method through Best Friend Clustering",
    authors: "Kun Li, Liang Yuan, Yunquan Zhang, Gongwei Chen",
    journal: "TPDS 2022",
    date: "2022",
    link: "../pdf/An_Accurate_and_Efficient_Large-Scale_Regression_Method_Through_Best_Friend_Clustering.pdf"
  },
  {
    title: "Reducing Redundancy in Data Organization and Arithmetic Calculation for Stencil Computations",
    authors: "Kun Li, Liang Yuan, Yunquan Zhang, Yue Yue",
    journal: "SC 2021",
    date: "2021",
    link: "https://dl.acm.org/doi/pdf/10.1145/3458817.3476154"
  },
  {
    title: "Temporal Vectorization for Stencils",
    authors: "Liang Yuan, Hang Cao, Yunquan Zhang, Kun Li, Pengqi Lu, Yue Yue",
    journal: "SC 2021",
    date: "2021",
    link: "https://dl.acm.org/doi/pdf/10.1145/3458817.3476149"
  },
  {
    title: "OpenKMC: a KMC design for hundred-billion-atom simulation using millions of cores on Sunway Taihulight",
    authors: "Kun Li, Honghui Shang, Yunquan Zhang, Shigang Li, Baodong Wu, Dong Wang, Libo Zhang, Fang Li, Dexun Chen, Zhiqiang Wei",
    journal: "SC 2019",
    date: "2019",
    link: "https://dl.acm.org/doi/pdf/10.1145/3295500.3356165"
  },
  {
    title: "swMD: Performance Optimizations for Molecular Dynamics Simulation on Sunway Taihulight",
    authors: "Kun Li, Shigang Li, Bei Wang, Yifeng Chen, Yunquan Zhang",
    journal: "ISPA 2019",
    date: "2019",
    link: "https://ieeexplore.ieee.org/stamp/stamp.jsp?tp=&arnumber=9047429"
  },
  {
    title: "FastNBL: fast neighbor lists establishment for molecular dynamics simulation based on bitwise operations",
    authors: "Kun Li, Shigang Li, Shan Huang, Yifeng Chen, Yunquan Zhang",
    journal: "The Journal of Supercomputing (2019)",
    date: "2019",
    link: ""
  },
  {
    title: "Communication-Avoiding for Dynamical Core of Atmospheric General Circulation Model",
    authors: "Junmin Xiao, Shigang Li, Baodong Wu, He Zhang, Kun Li, Erlin Yao, Yunquan Zhang, Guangming Tan",
    journal: "ICPP 2018",
    date: "2018",
    link: ""
  }
];
 