import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import { WhatsAppButton, WHATSAPP_LINK } from "@/components/whatsapp-button";

describe("Home page WhatsApp button", () => {
  it("links to the owner's WhatsApp number", () => {
    render(<WhatsAppButton />);

    const link = screen.getByRole("link", { name: /WhatsApp/i });

    expect(WHATSAPP_LINK).toBe("https://wa.me/254733340849");
    expect(link).toHaveAttribute("href", "https://wa.me/254733340849");
    expect(link).toHaveTextContent("WhatsApp");
    expect(link).not.toHaveTextContent("254");
  });
});
