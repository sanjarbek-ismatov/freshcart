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
          ]}
          homeLink={{
            title: "Umumiy",
            lastPath: "personal",
            path: "/account/home",
          }}
          header={<Typography text="Navigatsiya" />}
        />
        {children}
      </div>
    </Container>
  );
}
