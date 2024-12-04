"use client";

import Image from 'next/image';
import { useRouter } from 'next/navigation';
import React from 'react';
import dynamic from "next/dynamic";
import { FiArrowRight, FiEye } from 'react-icons/fi';

export default function Dashboard() {
  const router = useRouter();

  const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });


  return (
    <>
      <div className="mx-4 md:mx-12 mt-8">
        <div className="flex justify-between mb-3">
          <div className="flex justify-between w-full">
            <h2 className='text-2xl'>Página Inicial</h2>
          </div>
        </div>

        <div className="grid md:grid-cols-6 gap-10 items-start mt-8 ">
          <div className="col-span-3 flex flex-col gap-10">

            <div className="bg-white rounded-3xl p-7 h-[22rem]">

              <div className='flex justify-between items-center'>
                <p className='text-3xl'>Acessos</p>
                <div className='flex items-center'>

                  <span className="relative flex h-2 w-2 mr-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#86dce2] opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-[#89CBD0]"></span>
                  </span>

                  <p className='text-sm'>12 ONLINE</p>
                </div>
              </div>

              <div>
                <Chart
                  height={240}
                  series={
                    [{
                      name: "Acessos",
                      data: [50, 40, 300, 320, 10, 350, 200, 230, 10, 100, 30, 49],
                    }]
                  }
                  type="line"
                  options={{
                    chart: {
                      toolbar: {
                        show: false,
                      },
                    },
                    dataLabels: {
                      enabled: false,
                    },
                    colors: ["#89CBD0"],
                    stroke: {
                      lineCap: "round",
                      curve: "smooth",
                      width: 2,
                    },
                    markers: {
                      size: 0,
                    },
                    xaxis: {
                      axisTicks: {
                        show: false,
                      },
                      axisBorder: {
                        show: false,
                      },
                      labels: {
                        style: {
                          colors: "#616161",
                          fontSize: "12px",
                          fontFamily: "inherit",
                          fontWeight: 400,
                        },
                      },
                      categories: [
                        "00h",
                        "02h",
                        "04h",
                        "06h",
                        "08h",
                        "10h",
                        "12h",
                        "14h",
                        "16h",
                        "18h",
                        "20h",
                        "22h",
                      ],
                    },
                    yaxis: {
                      labels: {
                        style: {
                          colors: "#616161",
                          fontSize: "12px",
                          fontFamily: "inherit",
                          fontWeight: 400,
                        },
                      },
                    },
                    grid: {
                      show: true,
                      borderColor: "#dddddd",
                      strokeDashArray: 5,
                      xaxis: {
                        lines: {
                          show: true,
                        },
                      },
                      padding: {
                        top: 5,
                        right: 20,
                      },
                    },
                    fill: {
                      opacity: 0.8,
                    },
                    tooltip: {
                      theme: "dark",
                    },
                  }}
                />
              </div>
            </div>
          </div>


          <div className="relative col-span-3 h-[22rem] bg-white rounded-3xl p-7 flex flex-col justify-between">
            <p className='text-3xl'>
              Desbloqueie
              <br />
              Recursos</p>
            <Image className='absolute right-0 h-64' src="/plan.svg" height={300} width={300} alt="Ilustração de Estrela" />
            <div className='z-[9]'>
              <label>Plano atual</label>
              <button onClick={() => router.push("/dashboard/plano")} className='hover:bg-gray-100 mt-2 w-full bg-box rounded-lg flex justify-between p-3'>
                <p>Gratuito</p>
                <div className='flex items-center'>
                  <p className='text-stroke mr-2'>VER PLANOS</p>
                  <FiEye stroke='#C4C4C4' />
                </div>
              </button>
            </div>

          </div>
        </div>

        <div className='w-full bg-white p-7 rounded-3xl my-10'>
          <p className='text-3xl'>
            Comece a Vender
          </p>

          <button disabled onClick={() => router.push("/dashboard/produtos")} className='bg-box rounded-xl flex p-5 items-center mt-6 w-full text-left  hover:bg-gray-100 hover:cursor-not-allowed'>
            <input
              className="w-5 h-5 mr-5 border-gray-600 accent-blackborder-2"
              type="checkbox"
              checked
              disabled
            />
            <div className='flex items-center w-full justify-between'>
              <div>
                <p>Loja</p>
                <p className='text-gray-400'>Configure o nome, link e whatsapp da loja.</p>
              </div>
            </div>
          </button>

          <button onClick={() => router.push("/dashboard/produtos")} className='bg-box rounded-xl flex p-5 items-center mt-6 w-full text-left border-[#89CBD0] border-2 hover:bg-gray-100 hover:cursor-pointer'>
            <input
              className="w-5 h-5 mr-5 border-gray-600 accent-blackborder-2"
              type="checkbox"
              disabled
            />
            <div className='flex items-center w-full justify-between'>
              <div>
                <p>Produtos</p>
                <p className='text-gray-400'>Adicione o seu primeiro produto.</p>
              </div>
              <FiArrowRight size={24} stroke='#89CBD0' />
            </div>
          </button>

          <button onClick={() => router.push("/dashboard/produtos")} className='bg-box rounded-xl flex p-5 items-center mt-6 w-full text-left border-[#89CBD0] border-2 hover:bg-gray-100 hover:cursor-pointer'>
            <input
              className="w-5 h-5 mr-5 border-gray-600 accent-blackborder-2"
              type="checkbox"
              disabled
            />
            <div className='flex items-center w-full justify-between'>
              <div>
                <p>Coleções</p>
                <p className='text-gray-400'>Crie a sua primeira coleção.</p>
              </div>
              <FiArrowRight size={24} stroke='#89CBD0' />
            </div>
          </button>
        </div>
      </div >
    </>
  );
};
