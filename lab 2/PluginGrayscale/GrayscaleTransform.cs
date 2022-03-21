using System;
using System.Drawing;
using PluginInterface;

namespace PluginGrayscale
{
    [Version(1, 0)]
    public class GrayscaleTransform : IPlugin
    {
        public string Name
        {
            get
            {
                return "Преобразовать в оттенки серого";
            }
        }

        public string Author
        {
            get
            {
                return "Sukhanov Ivan";
            }
        }

        public void Transform(Bitmap bitmap)
        {
            for (int i = 0; i < bitmap.Width; ++i)
            {
                for (int j = 0; j < bitmap.Height; ++j)
                {
                    Color color = bitmap.GetPixel(i, j);
                    int grayScale = (int)((color.R * 0.3) + (color.G * 0.59) + (color.B * 0.11));
                    Color grayColor = Color.FromArgb(color.A, grayScale, grayScale, grayScale);
                    bitmap.SetPixel(i, j, grayColor);
                }
            }
        }
    }
}
