export function Footer() {
  return (
    <footer className="bg-gray-900 font-OpenSans px-6 py-6 sm:py-10">
      <div className="max-w-7xl mx-auto flex flex-col items-center space-y-4 text-center">
        {/* Creator Info */}
        <p className="text-gray-100 text-base sm:text-lg font-semibold">
          Created by Hiba Mohamed
        </p>

        {/* Disclaimer Section */}
        <p className="text-gray-200 text-sm sm:text-base">
          <strong>Disclaimer:</strong> Icons sourced from Canva. Background
          images is Gemini AI-generated.
        </p>

        {/* Copyright Information */}
        <span className="text-gray-200 text-sm sm:text-base">
          © 2024 All Rights Reserved.
        </span>

      </div>
    </footer>
  );
}

export default Footer;
