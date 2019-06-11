# T-BAS v2.1 Tutorial 4: Using cifr phyloXML to cumulatively update trees

1. 1) In this tutorial we will show how you can perform consecutive placements on the same tree. This is useful to build on a previous placement run with additional sequence data. To start, go to the T-BAS start page (https://tbas.hpc.ncsu.edu/start) and click on the Upload Tree button (see arrow).
![](images/tbas-tutorial4/Tutorial4.1.png)

2. You will be required to login. If you are first time user, you will need to register by clicking on the Registration page link (see arrow).
![](images/tbas-tutorial4/Tutorial4.2.1.png)
If you already registered but forgot your PIN you can go to the Registration page and Check to resend lost PIN (see arrow).
![](images/tbas-tutorial4/Tutorial4.2.2.png)

3. After registering you will be returned to the login page. Enter your email address, PIN and check the box acknowledging your acceptance of our disclaimer and privacy policy. Then click Submit.
![](images/tbas-tutorial4/Tutorial4.3.png)

4. After login, select Newick tree
![](images/tbas-tutorial4/Tutorial4.4.png)

5.  This will expand the display to show three upload sections: Upload reference tree, Upload reference sequence alignment and Upload reference metadata.  Click on the example file links (see arrows) for each section to load the files.
![](images/tbas-tutorial4/Tutorial4.5.png)

6. The example files will now be visible and can be edited. Some minor edits will be required to the Nexus sequence alignment file. To see more of the alignment file, click and drag down the corner box (see arrow).
![](images/tbas-tutorial4/Tutorial4.6.png)

7. The expanded window will look as shown below.  Click in the box and search for “locus” in your browser (Ctrl-F)
![](images/tbas-tutorial4/Tutorial4.7.png)

8. The search will highlight the loci that are defined in the character partition block and preceded by “charset” (see arrow). If no changes are made, the loci will be labeled as locus1, locus2, locus3, locus4, locus5 and locus6 in T-BAS. These names make it difficult to track these loci when performing placements and retrieving data. In this example, the actual name of the locus is provided at the end of the charset line. For example, for locus1 the name is RPB2. Note all locus designations in the alignment file (highlighted in yellow and orange) will need to be relabeled – see next step.
![](images/tbas-tutorial4/Tutorial4.8.png)

9. Here are the relabeled loci. T-BAS can now correctly track the loci and the user will know which target locus to select when performing a placement.
![](images/tbas-tutorial4/Tutorial4.9.png)

10. 10) Scroll to the next section where you will be able to view the reference files or perform a phylogeny-based placement using those files. Select yes.