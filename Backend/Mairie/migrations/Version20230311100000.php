<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20230311100000 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('CREATE SEQUENCE check_folder_id_seq INCREMENT BY 1 MINVALUE 1 START 1');
        $this->addSql('CREATE SEQUENCE folder_id_seq INCREMENT BY 1 MINVALUE 1 START 1');
        $this->addSql('CREATE SEQUENCE mairie_id_seq INCREMENT BY 1 MINVALUE 1 START 1');
        $this->addSql('CREATE SEQUENCE planning_id_seq INCREMENT BY 1 MINVALUE 1 START 1');
        $this->addSql('CREATE SEQUENCE reservation_id_seq INCREMENT BY 1 MINVALUE 1 START 1');
        $this->addSql('CREATE SEQUENCE users_id_seq INCREMENT BY 1 MINVALUE 1 START 1');
        $this->addSql('CREATE TABLE check_folder (id INT NOT NULL, reservation_id INT DEFAULT NULL, folder_id INT DEFAULT NULL, file VARCHAR(255) NOT NULL, PRIMARY KEY(id))');
        $this->addSql('CREATE INDEX IDX_9952F062B83297E7 ON check_folder (reservation_id)');
        $this->addSql('CREATE INDEX IDX_9952F062162CB942 ON check_folder (folder_id)');
        $this->addSql('CREATE TABLE folder (id INT NOT NULL, nom VARCHAR(255) NOT NULL, path VARCHAR(255) NOT NULL, PRIMARY KEY(id))');
        $this->addSql('CREATE TABLE mairie (id INT NOT NULL, nom VARCHAR(255) NOT NULL, addresse VARCHAR(255) NOT NULL, phone VARCHAR(20) NOT NULL, email VARCHAR(255) NOT NULL, PRIMARY KEY(id))');
        $this->addSql('CREATE TABLE planning (id INT NOT NULL, mairie_id INT DEFAULT NULL, reservation_number INT NOT NULL, day VARCHAR(255) NOT NULL, PRIMARY KEY(id))');
        $this->addSql('CREATE INDEX IDX_D499BFF6E7A79AB ON planning (mairie_id)');
        $this->addSql('CREATE TABLE reservation (id INT NOT NULL, mairie_id INT DEFAULT NULL, nom VARCHAR(255) NOT NULL, prenom VARCHAR(255) NOT NULL, contact VARCHAR(255) NOT NULL, date VARCHAR(255) NOT NULL, time VARCHAR(255) NOT NULL, payement_status BOOLEAN NOT NULL, payement_date VARCHAR(255) NOT NULL, PRIMARY KEY(id))');
        $this->addSql('CREATE INDEX IDX_42C84955E7A79AB ON reservation (mairie_id)');
        $this->addSql('CREATE TABLE users (id INT NOT NULL, mairie_id INT DEFAULT NULL, firstname VARCHAR(255) NOT NULL, lastname VARCHAR(255) NOT NULL, email VARCHAR(255) NOT NULL, password VARCHAR(255) NOT NULL, role INT NOT NULL, PRIMARY KEY(id))');
        $this->addSql('CREATE INDEX IDX_1483A5E9E7A79AB ON users (mairie_id)');
        $this->addSql('ALTER TABLE check_folder ADD CONSTRAINT FK_9952F062B83297E7 FOREIGN KEY (reservation_id) REFERENCES reservation (id) NOT DEFERRABLE INITIALLY IMMEDIATE');
        $this->addSql('ALTER TABLE check_folder ADD CONSTRAINT FK_9952F062162CB942 FOREIGN KEY (folder_id) REFERENCES folder (id) NOT DEFERRABLE INITIALLY IMMEDIATE');
        $this->addSql('ALTER TABLE planning ADD CONSTRAINT FK_D499BFF6E7A79AB FOREIGN KEY (mairie_id) REFERENCES mairie (id) NOT DEFERRABLE INITIALLY IMMEDIATE');
        $this->addSql('ALTER TABLE reservation ADD CONSTRAINT FK_42C84955E7A79AB FOREIGN KEY (mairie_id) REFERENCES mairie (id) NOT DEFERRABLE INITIALLY IMMEDIATE');
        $this->addSql('ALTER TABLE users ADD CONSTRAINT FK_1483A5E9E7A79AB FOREIGN KEY (mairie_id) REFERENCES mairie (id) NOT DEFERRABLE INITIALLY IMMEDIATE');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('CREATE SCHEMA public');
        $this->addSql('DROP SEQUENCE check_folder_id_seq CASCADE');
        $this->addSql('DROP SEQUENCE folder_id_seq CASCADE');
        $this->addSql('DROP SEQUENCE mairie_id_seq CASCADE');
        $this->addSql('DROP SEQUENCE planning_id_seq CASCADE');
        $this->addSql('DROP SEQUENCE reservation_id_seq CASCADE');
        $this->addSql('DROP SEQUENCE users_id_seq CASCADE');
        $this->addSql('ALTER TABLE check_folder DROP CONSTRAINT FK_9952F062B83297E7');
        $this->addSql('ALTER TABLE check_folder DROP CONSTRAINT FK_9952F062162CB942');
        $this->addSql('ALTER TABLE planning DROP CONSTRAINT FK_D499BFF6E7A79AB');
        $this->addSql('ALTER TABLE reservation DROP CONSTRAINT FK_42C84955E7A79AB');
        $this->addSql('ALTER TABLE users DROP CONSTRAINT FK_1483A5E9E7A79AB');
        $this->addSql('DROP TABLE check_folder');
        $this->addSql('DROP TABLE folder');
        $this->addSql('DROP TABLE mairie');
        $this->addSql('DROP TABLE planning');
        $this->addSql('DROP TABLE reservation');
        $this->addSql('DROP TABLE users');
    }
}
