# Tutorial 1: Viewing T-BAS trees, alignments, and specimen metadata
In this tutorial we will be using the *Ramularia* reference tree as an example to illustrate the features available when viewing trees in T-BAS. 

A few things to note:
Pop-up windows will need to be enabled when using TBAS.

References for each tree are provided under the Citations menu. We advise users to refer to the original papers for details on the specific primers that were used for amplification and sequencing of the Loci included in T-BAS.

1. Go to the T-BAS start page (https://tbas.hpc.ncsu.edu/start) and click on the **T-BAS Trees** button (see arrow).
![](images/tbas-tutorial1/Tutorial1.1.png)

2. Click on the blue bullet to select the *Ramularia* reference tree.  Note only trees with a solid blue bullet in the guide tree contain data.
![](images/tbas-tutorial1/Tutorial1.2.png)

3. The *Ramularia* tree is now highlighted in red.  Below the guide tree are options (blue buttons) for **View Tree Data** (i.e., viewing/downloading of tree, alignments and specimen metadata), and **Place Unknowns** (i.e., phylogenetic placement of unknown sequences).
![](images/tbas-tutorial1/Tutorial1.3.png)

4. Clicking on the **View Tree Data** button on previous page will open up a new tab with the Ramularia tree. At the top of the left side pane are buttons for **help** (tutorials), **new data** (to place unknown sequences on tree), **update metadata** (to upload new specimen metadata), **color editor** (to assign new colors to attributes in tree), color reset (to restore colors to default settings), **reset defaults** (to restore default settings; if your settings do not show the defaults shown in the screenshots in this tutorial, hit reset defaults) and **select by list** (to upload a file with a list of taxa to highlight in tree). Entering text in the **Search** box will search for the name across all tree data and display it in red.  The options under **Highlighted taxa** are available when user selects a leaf or clade in the tree or taxa are selected from an uploaded list.  Note the default settings are **Layout** (radial), **Format** (FASTA - aligned), and **Sequence** (RPB2) in this example.  There are subheadings under **Sequence** if the user wants to view each locus **separate** or multiple loci **concatenated**.
![](images/tbas-tutorial1/Tutorial1.4.png)

5. Scroll to the bottom of the left side pane to see additional options. Under the **Sequence** heading and immediately below the **separate** and **concatenated** alignment options is a pull down for **Show taxa for data** (to highlight taxa for different locus combinations) and below the pull down are the alignment default viewing options: **remove taxa with no data, remove sites with all gaps**, and **remove unalignable regions**; to view more or less alignment data, check or uncheck one or more of these boxes. The **Display** section provides options to **color all** leaves, **color excluding singletons** and **color only singletons**. Legends would normally appear in the right-side pane in a single column if **Show 1 column legend** is checked (e.g. see step 6); unchecking will display legends side by side. Colors can be shown with **no transparency**.
![](images/tbas-tutorial1/Tutorial1.5.png)
Text options include **italicize names** and **adjusting font size**. The **Colorize Leaves** option will colorize the outer leaves of the tree according to specimen metadata by selecting from the pull down.  Additional outer rings (i.e. bands) can be added – up to a maximum of 12 by clicking on the **more+** option. Colors can be applied to the **background** or **text**. Additional options will **Colorize Branches** and the **Width** of branch lines can be adjusted. **Bootstrap values** can be displayed on branches or by thickening the lines in the tree for a specified bootstrap threshold value. **Edge numbers** are used when placing unknowns in T-BAS (see Tutorial 2). **Branch lengths** are by default drawn to scale. Trees and legend can be **Exported** separately and combined as PNG, SVG, PDF, and multipage PDF. The **Zoom** shows the tree magnification, which can be adjusted by clicking the ![](images/tbas-tutorial1/magnifier.jpg) icons or typing a value into the box. The default is 1.0.

6. Below is the tree resized and formatted with the following options selected:  
   **Zoom** 0.5220  
   **Font size** +6  
   **Font size bootstrap** +5  
   **Colorize leaves** by Species  
   **Colorize band 2** by Country  
   **Colorize Branches** by Species  
   Branch **Width** 2  
   **Bootstrap values with thick lines**  
   **Show bootstrap values (numbers)**.  
   **Branch lengths** are drawn to scale.  

   The legends are displayed in the dashboard window on the right.
![](images/tbas-tutorial1/Tutorial1.6.png)

7. Below is the tree shown in **rectangular layout** shown with the following options selected:  
   **Zoom** 0.8316  
   **Font size** +6  
   **Font size bootstrap** +4  
   Names are **Italicized**  
   No colorizing of leaves or bands  
   **Colorize Branches** by Species  
   **Branch Width** to 4  
   **Show bootstrap values with numbers**.  
   **Branch lengths** are drawn to scale.  
   **Horizontal** and **Vertical Scaling** were adjusted as shown below.
![](images/tbas-tutorial1/Tutorial1.7.png)

8. Hover over and left click on node (see arrow) to show pop-up menu and under **Taxa** click on **Select**.  All the taxa in the selected clade will show in red. The pop-up menu also shows available options for **Metadata, Labels**, and **Tree**. The dashboard window at the top right highlights the selected species and the window below shows the number of taxa selected (5), the number of taxa with missing data for RPB2 (0), number of taxa with data (5).
![](images/tbas-tutorial1/Tutorial1.8.png)

9. Change the **Format** to **NEXUS**. Clicking on the **view** button under **Highlighted taxa** will show the sequences for RPB2 (**NEXUS** format) for the highlighted taxa in a new pop-up window. Note the pop-up menu shown in step 8 also has a **view** option under **Metadata** that could be used instead. The dashboard window at the bottom right now provides a summary of the total length of the alignment (664), number of constant sites (660) and number of variable sites (4).
![](images/tbas-tutorial1/Tutorial1.9.png)

10. Selecting the **PHYLIP** option under the **Format** menu and then clicking on the **view** button under **Highlighted taxa** will show the sequences for RPB2 (**PHYLIP** format) for the highlighted taxa in the pop-up window.
![](images/tbas-tutorial1/Tutorial1.10.png)

11. Clicking on **Newick tree** under **Highlighted taxa** will display the tree for the highlighted taxa in a new tab.  Depending on which option is selected under **Format** the Newick tree is displayed in **NEXUS** or **PHYLIP** format.
![](images/tbas-tutorial1/Tutorial1.11.1.png)
Tree in **NEWICK/NEXUS** format
![](images/tbas-tutorial1/Tutorial1.11.2.png)
Tree in **NEWICK/PHYLIP** format
![](images/tbas-tutorial1/Tutorial1.11.3.png)

12. Click to select all six loci (RPB2, ITS, GAPDH, HIS3, ACT and TEF-1a), with the **concatenated** option under **Sequence**, and **NEXUS** as the file **Format**. Then click on **view** to display the concatenated multi-locus alignment in NEXUS format with character partition block showing the start and end position of each locus in the alignment.  

    This information is useful when using other tools, for example [PartitionFinder](http://www.robertlanfear.com/partitionfinder/) to identify the optimal data partitions evolving under the same evolutionary     model. The dashboard window on the right provides a summary of the variation for each locus.
![](images/tbas-tutorial1/Tutorial1.12.png)

13. Switching the **Format** to **PHYLIP**, selecting **concatenated** under **Sequence**, and then clicking on **view** shows the multi-locus concatenated alignment in PHYLIP format.
![](images/tbas-tutorial1/Tutorial1.13.png)

14. Clicking on the **Show taxa for data** pull-down menu will display options for selecting taxa that contain a specified number of loci.  

    In this example, all of the five highlighted taxa have data for all six loci.  In other trees, the selected taxa may be     missing information for one or more loci. This feature will create alignment files with varying numbers of loci which       are useful for assessing topological incongruence using a cumulative supermatrix approach and the [Mesquite Hypha](http://mesquiteproject.org/packages/hypha/manual/index.html) package.
![](images/tbas-tutorial1/Tutorial1.14.png)
