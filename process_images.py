from tqdm import tqdm
import matplotlib.pyplot as plt
import numpy as np

count = 0
with open("base64.txt", "w+") as logfile:
    for i in tqdm(range(20)):
        image = plt.imread("fakes{}.png".format(i))
        image = image.reshape(16, 256, 30, 256, 3)
        image = np.swapaxes(image, 1, 2)
        image = image.reshape(16*30, 256, 256, 3)
        for j in range(16*30):
            plt.imsave("images/{}.png".format(count), image[j])
            count+=1