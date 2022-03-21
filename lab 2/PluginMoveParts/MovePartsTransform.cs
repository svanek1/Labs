using System;
using System.Drawing;
using System.Collections.Generic;
using PluginInterface;

namespace PluginMoveParts
{
    public class MovePartsTransform : IPlugin
    {
        private static Random rng = new Random((int)DateTime.Now.Ticks & 0x0000FFFF);

        public string Name
        {
            get
            {
                return "Перемешать части";
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
            int partWidth = bitmap.Width / 3;
            int partHeight = bitmap.Height / 3;
            List<Bitmap> parts = new List<Bitmap>();

            for (int i = 0; i < 3; ++i)
            {
                for (int j = 0; j < 3; ++j)
                {
                    int x = i * partWidth, y = j * partHeight;
                    var width = x + partWidth > bitmap.Width ? bitmap.Width - x - 1 : partWidth;
                    var height = y + partHeight > bitmap.Height ? bitmap.Height - y - 1 : partHeight;
                    Bitmap part = bitmap.Clone(new Rectangle(x, y, width, height), bitmap.PixelFormat);
                    parts.Add(part);
                }
            }

            parts.Sort((a, b) => rng.Next(-1, 1));

            Stack<Bitmap> stack = new Stack<Bitmap>(parts);
            Graphics graphics = Graphics.FromImage(bitmap);

            for (int i = 0; i < 3; ++i)
            {
                for (int j = 0; j < 3; ++j)
                {
                    int x = i * partWidth, y = j * partHeight;
                    var width = x + partWidth > bitmap.Width ? bitmap.Width - x - 1 : partWidth;
                    var height = y + partHeight > bitmap.Height ? bitmap.Height - y - 1 : partHeight;
                    Bitmap part = stack.Pop();
                    graphics.DrawImage(part, new Rectangle(x, y, width, height));
                }
            }
        }
    }
}
