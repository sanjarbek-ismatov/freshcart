import { Container, NavigationPanel, Typography } from "@components";
import { ReactNode } from "react";

export default function AccountLayout({ children }: { children: ReactNode }) {
  return (
    <Container>
      <div className="flex">
        <NavigationPanel
          links={[
            {
              title: "Sozlamalar",
              lastPath: "personal",
              path: "/account/personal",
            },
            {
              title: "Buyurtmalar",
              lastPath: "orders",
              path: "/account/orders",
            },
            {
              title: "Savatcha",
              lastPath: "checkout",
              path: "/account/checkout",
            },
          ]}
          homeLink={{
            title: "Umumiy",
            lastPath: "home",
            path: "/account/home",
          }}
          header={<Typography text="Navigatsiya" />}
        />
        {children}
      </div>
    </Container>
  );
}
