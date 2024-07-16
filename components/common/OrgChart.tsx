"use client";

import React, {useState} from "react";
import Link from "next/link";

import {OrganizationChart} from "primereact/organizationchart";
import {TreeNode} from "primereact/treenode";

import {organization} from "@/data";

export default function OrgChart() {
  const [data] = useState(organization);

  const nodeTemplate = (node: any) => {
    if (node.type === "person") {
      return (
        <div className='flex flex-col'>
          <div className='flex flex-col items-center'>
            <Link href={node.data.href}>{node.data.title}</Link>
          </div>
        </div>
      );
    }

    return <Link href={node.href}>{node.label}</Link>;
  };

  return (
    <div className='card overflow-x-auto' data-aos='zoom-in'>
      <OrganizationChart value={data} nodeTemplate={nodeTemplate} />
    </div>
  );
}
