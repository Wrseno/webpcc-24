export interface MemberCardProps {
  members: Array<any>;
}

export const organization = [
  {
    expanded: true,
    type: "person",
    className: "bg-quinary text-senary text-sm sm:text-base p-4",
    style: {borderRadius: "12px"},
    data: {
      title: "Administrator",
      href: "#administrator",
    },
    children: [
      {
        expanded: true,
        type: "person",
        className: "bg-quaternary text-senary text-sm sm:text-base p-4",
        style: {borderRadius: "12px"},
        data: {
          title: "Sekretaris Umum",
          href: "#sekum",
        },
        children: [
          {
            label: "Sekretaris",
            className: "bg-denary text-senary text-sm sm:text-base p-4",
            style: {borderRadius: "12px"},
            href: "#sekretaris",
          },
          {
            expanded: true,
            type: "person",
            className: "bg-teartiary text-senary text-sm sm:text-base p-4",
            style: {borderRadius: "12px"},
            data: {
              title: "Litbang",
              href: "#litbang",
            },
            children: [
              {
                label: "Divisi Humas",
                className: "bg-secondary text-senary text-sm sm:text-base p-4",
                style: {borderRadius: "12px"},
                href: "#humas",
              },
              {
                label: "Divisi HRD",
                className: "bg-secondary text-senary text-sm sm:text-base p-4",
                style: {borderRadius: "12px"},
                href: "#hrd",
              },
              {
                expanded: true,
                type: "person",
                className: "bg-secondary text-senary text-sm sm:text-base p-4",
                style: {borderRadius: "12px"},
                data: {
                  title: "Divisi KRT",
                  href: "#krt",
                },
                children: [
                  {
                    label: "Departemen Danus",
                    className:
                      "bg-primary text-senary text-sm sm:text-base p-4",
                    style: {borderRadius: "12px"},
                    href: "#danus",
                  },
                  {
                    label: "Departemen Maintenance",
                    className:
                      "bg-primary text-senary text-sm sm:text-base p-4",
                    style: {borderRadius: "12px"},
                    href: "#maintenance",
                  },
                ],
              },
              {
                label: "Divisi Redaksi",
                className: "bg-secondary text-senary text-sm sm:text-base p-4",
                style: {borderRadius: "12px"},
                href: "#redaksi",
              },
              {
                expanded: true,
                type: "person",
                className: "bg-secondary text-senary text-sm sm:text-base p-4",
                style: {borderRadius: "12px"},
                data: {
                  title: "Divisi Workshop",
                  href: "#workshop",
                },
                children: [
                  {
                    label: "Derpartemen Software",
                    className:
                      "bg-primary text-senary text-sm sm:text-base p-4",
                    style: {borderRadius: "12px"},
                    href: "#software",
                  },
                  {
                    label: "Derpartemen Multimedia",
                    className:
                      "bg-primary text-senary text-sm sm:text-base p-4",
                    style: {borderRadius: "12px"},
                    href: "#multimedia",
                  },
                  {
                    label: "Derpartemen Network",
                    className:
                      "bg-primary text-senary text-sm sm:text-base p-4",
                    style: {borderRadius: "12px"},
                    href: "#network",
                  },
                ],
              },
            ],
          },
          {
            label: "Bendahara",
            className: "bg-denary text-senary text-sm sm:text-base p-4",
            style: {borderRadius: "12px"},
            href: "#bendahara",
          },
        ],
      },
    ],
  },
];
